package Exercicio2;

public class MainDesconto {
    public static void main(String[] args) {
        System.out.println("=== TESTES DO MÉTODO APLICAR DESCONTO ===\n");

        // Caso 1: Desconto válido
        System.out.println("1. DESCONTO VÁLIDO (20%):");
        testarDesconto("Smartphone", 1500.00, 10, 20.0);

        // Caso 2: Desconto máximo permitido
        System.out.println("\n2. DESCONTO MÁXIMO PERMITIDO (50%):");
        testarDesconto("Tablet", 800.00, 5, 50.0);

        // Caso 3: Desconto zero (limite inferior)
        System.out.println("\n3. DESCONTO ZERO (0%):");
        testarDesconto("Fone de Ouvido", 200.00, 15, 0.0);

        // Caso 4: Desconto negativo (inválido)
        System.out.println("\n4. DESCONTO NEGATIVO (INVÁLIDO ❌):");
        testarDescontoInvalido("Mouse", 89.90, 20, -10.0);

        // Caso 5: Desconto acima do limite (inválido)
        System.out.println("\n5. DESCONTO ACIMA DO LIMITE (INVÁLIDO ❌):");
        testarDescontoInvalido("Teclado", 150.00, 8, 60.0);

        // Caso 6: Múltiplos descontos sequenciais
        System.out.println("\n6. MÚLTIPLOS DESCONTOS SEQUENCIAIS:");
        testarMultiplosDescontos();

        // Caso 7: Teste do método calcularPrecoComDesconto (sem alterar preço original)
        System.out.println("\n7. CÁLCULO DE DESCONTO SEM ALTERAR PREÇO ORIGINAL:");
        testarCalculoDescontoSemAlteracao();

        // Caso 8: Teste do método sobrecarregado
        System.out.println("\n8. MÉTODO SOBRECARREGADO COM VALIDAÇÃO ADICIONAL:");
        testarMetodoSobrecarregado();
    }

    private static void testarDesconto(String nome, double preco, int estoque, double desconto) {
        try {
            Produto produto = new Produto(nome, preco, estoque);
            System.out.println("Antes do desconto: " + produto);
            System.out.printf("Aplicando desconto de %.1f%%...\n", desconto);

            produto.aplicarDesconto(desconto);
            System.out.println("Após o desconto: " + produto);
            System.out.println("✅ Desconto aplicado com sucesso!");

        } catch (DescontoInvalidoException e) {
            System.out.println("❌ " + e.getMessage());
        }
    }

    private static void testarDescontoInvalido(String nome, double preco, int estoque, double desconto) {
        try {
            Produto produto = new Produto(nome, preco, estoque);
            System.out.println("Produto: " + produto);
            System.out.printf("Tentando aplicar desconto inválido de %.1f%%...\n", desconto);

            produto.aplicarDesconto(desconto);
            System.out.println("❌ TESTE FALHOU - Exceção não foi lançada!");

        } catch (DescontoInvalidoException e) {
            System.out.println("✅ Exceção capturada corretamente: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada (IllegalArgumentException): " + e.getMessage());
        }
    }

    private static void testarMultiplosDescontos() {
        try {
            Produto produto = new Produto("Notebook Gamer", 3500.00, 3);
            System.out.println("Estado inicial: " + produto);

            // Primeiro desconto
            produto.aplicarDesconto(15.0);
            System.out.println("Após 1º desconto (15%): " + produto);

            // Segundo desconto
            produto.aplicarDesconto(10.0);
            System.out.println("Após 2º desconto (10%): " + produto);

            // Terceiro desconto
            produto.aplicarDesconto(5.0);
            System.out.println("Após 3º desconto (5%): " + produto);

            System.out.println("✅ Múltiplos descontos aplicados com sucesso!");

        } catch (DescontoInvalidoException e) {
            System.out.println("❌ Erro: " + e.getMessage());
        }
    }

    private static void testarCalculoDescontoSemAlteracao() {
        try {
            Produto produto = new Produto("Monitor 24\"", 1200.00, 7);
            System.out.println("Produto original: " + produto);

            double[] descontos = {10.0, 25.0, 40.0, 50.0};

            for (double desconto : descontos) {
                double precoComDesconto = produto.calcularPrecoComDesconto(desconto);
                System.out.printf("Desconto de %.1f%%: R$ %.2f → R$ %.2f\n",
                        desconto, produto.getPreco(), precoComDesconto);
            }

            // Verificando que o preço original não foi alterado
            System.out.println("Preço original mantido: R$ " + produto.getPreco());
            System.out.println("✅ Cálculos realizados sem alterar o preço original!");

        } catch (DescontoInvalidoException e) {
            System.out.println("❌ Erro: " + e.getMessage());
        }
    }

    private static void testarMetodoSobrecarregado() {
        try {
            Produto produto = new Produto("Webcam", 300.00, 12);
            System.out.println("Produto: " + produto);

            // Teste com desconto zero permitido
            System.out.println("Aplicando desconto zero (permitido):");
            produto.aplicarDesconto(0.0, true); // Permitindo desconto zero
            System.out.println("✅ Desconto zero aplicado com sucesso!");

            // Teste com desconto zero não permitido
            System.out.println("Tentando aplicar desconto zero (não permitido):");
            produto.aplicarDesconto(0.0, false); // Não permitindo desconto zero

        } catch (DescontoInvalidoException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }
    }
}
