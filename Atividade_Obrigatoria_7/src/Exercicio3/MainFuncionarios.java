package Exercicio3;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class MainFuncionarios {
    public static void main(String[] args) {
        System.out.println("=== SISTEMA DE GERENCIAMENTO DE FUNCIONÁRIOS ===\n");

        // Criando lista de funcionários
        List<Funcionario> funcionarios = new ArrayList<>();

        // Adicionando diferentes tipos de funcionários
        System.out.println("1. CRIANDO FUNCIONÁRIOS:\n");

        try {
            // Criando gerentes
            Gerente gerente1 = new Gerente("Maria Silva", new BigDecimal("15000.00"), "TI", 8);
            Gerente gerente2 = new Gerente("Carlos Santos", new BigDecimal("12000.00"), "Vendas", 5);

            // Criando desenvolvedores
            Desenvolvedor dev1 = new Desenvolvedor("Ana Costa", new BigDecimal("8000.00"), "Java", 3);
            dev1.adicionarTecnologia("Spring Boot");
            dev1.adicionarTecnologia("Hibernate");

            Desenvolvedor dev2 = new Desenvolvedor("Pedro Oliveira", new BigDecimal("5000.00"), "JavaScript", 2);
            dev2.adicionarTecnologia("React");
            dev2.adicionarTecnologia("Node.js");

            Desenvolvedor dev3 = new Desenvolvedor("Juliana Lima", new BigDecimal("3500.00"), "Python", 1);
            dev3.adicionarTecnologia("Django");
            dev3.adicionarTecnologia("Flask");

            // Adicionando à lista
            funcionarios.add(gerente1);
            funcionarios.add(gerente2);
            funcionarios.add(dev1);
            funcionarios.add(dev2);
            funcionarios.add(dev3);

            System.out.println("✅ Funcionários criados com sucesso!\n");

        } catch (IllegalArgumentException e) {
            System.out.println("❌ Erro ao criar funcionários: " + e.getMessage());
            return;
        }

        // Demonstração 2: Exibindo bônus de cada funcionário
        System.out.println("2. BÔNUS DE CADA FUNCIONÁRIO:\n");

        for (Funcionario func : funcionarios) {
            System.out.println("---");
            System.out.println(func);
            System.out.printf("Bônus detalhado: %.0f%% do salário = R$ %,.2f\n",
                    getPercentualBonus(func), func.calcularBonus());
        }

        // Demonstração 3: Total de bônus da empresa
        System.out.println("\n3. TOTAL DE BÔNUS DA EMPRESA:\n");
        calcularTotalBonus(funcionarios);

        // Demonstração 4: Polimorfismo em ação
        System.out.println("\n4. DEMONSTRAÇÃO DE POLIMORFISMO:\n");
        demonstrarPolimorfismo(funcionarios);

        // Demonstração 5: Testando validações
        System.out.println("\n5. TESTANDO VALIDAÇÕES:\n");
        testarValidacoes();

        // Demonstração 6: Operações específicas de cada tipo
        System.out.println("\n6. OPERAÇÕES ESPECÍFICAS:\n");
        operacoesEspecificas(funcionarios);
    }

    private static double getPercentualBonus(Funcionario func) {
        if (func instanceof Gerente) {
            return 20.0;
        } else if (func instanceof Desenvolvedor) {
            return 10.0;
        }
        return 0.0;
    }

    private static void calcularTotalBonus(List<Funcionario> funcionarios) {
        BigDecimal totalSalarios = BigDecimal.ZERO;
        BigDecimal totalBonus = BigDecimal.ZERO;

        for (Funcionario func : funcionarios) {
            totalSalarios = totalSalarios.add(func.getSalario());
            totalBonus = totalBonus.add(func.calcularBonus());
        }

        System.out.printf("Total de salários: R$ %,.2f\n", totalSalarios);
        System.out.printf("Total de bônus: R$ %,.2f\n", totalBonus);
        System.out.printf("Número de funcionários: %d\n", funcionarios.size());
    }

    private static void demonstrarPolimorfismo(List<Funcionario> funcionarios) {
        System.out.println("Usando polimorfismo - mesmo método, comportamentos diferentes:");

        for (Funcionario func : funcionarios) {
            // O método calcularBonus() se comporta diferente para cada tipo
            String tipo = func instanceof Gerente ? "Gerente" : "Desenvolvedor";
            System.out.printf("- %s (%s): R$ %,.2f\n",
                    func.getNome(), tipo, func.calcularBonus());
        }
    }

    private static void testarValidacoes() {
        System.out.println("Testando validações de entrada:");

        // Teste 1: Salário negativo
        try {
            new Gerente("Teste", new BigDecimal("-1000"), "TI", 5);
            System.out.println("❌ Validação de salário negativo falhou");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Salário negativo: " + e.getMessage());
        }

        // Teste 2: Salário zero
        try {
            new Desenvolvedor("Teste", BigDecimal.ZERO, "Java", 1);
            System.out.println("❌ Validação de salário zero falhou");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Salário zero: " + e.getMessage());
        }

        // Teste 3: Nome vazio
        try {
            new Gerente("", new BigDecimal("5000"), "TI", 5);
            System.out.println("❌ Validação de nome vazio falhou");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Nome vazio: " + e.getMessage());
        }
    }

    private static void operacoesEspecificas(List<Funcionario> funcionarios) {
        for (Funcionario func : funcionarios) {
            if (func instanceof Gerente gerente) {
                // Operações específicas de Gerente
                gerente.promoverMembroEquipe();
            } else if (func instanceof Desenvolvedor desenvolvedor) {
                // Operações específicas de Desenvolvedor
                desenvolvedor.desenvolverFeature("Sistema de autenticação");

                // Bônus com nível (método específico do Desenvolvedor)
                System.out.printf("Bônus com nível de %s: R$ %,.2f\n",
                        desenvolvedor.getNome(), desenvolvedor.calcularBonusComNivel());
            }
            System.out.println("---");
        }
    }
}