package Exercicio7;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public class TesteRepositorioGenerico {
    public static void main(String[] args) {
        System.out.println("=== REPOSITÓRIO GENÉRICO EM MEMÓRIA ===\n");

        // Teste 1: Repositório de Produtos (String como ID)
        System.out.println("1. REPOSITÓRIO DE PRODUTOS:");
        testarRepositorioProdutos();

        // Teste 2: Repositório de Funcionários (Long como ID)
        System.out.println("\n2. REPOSITÓRIO DE FUNCIONÁRIOS:");
        testarRepositorioFuncionarios();

        // Teste 3: Operações avançadas
        System.out.println("\n3. OPERAÇÕES AVANÇADAS:");
        testarOperacoesAvancadas();
    }

    private static void testarRepositorioProdutos() {
        IRepository<Produto, String> repoProdutos = new InMemoryRepository<>();

        // Criando produtos
        Produto notebook = new Produto("P001", "Notebook", new BigDecimal("2500.00"), 10);
        Produto mouse = new Produto("P002", "Mouse", new BigDecimal("89.90"), 50);
        Produto teclado = new Produto("P003", "Teclado", new BigDecimal("150.00"), 25);

        // Salvando produtos
        repoProdutos.salvar(notebook);
        repoProdutos.salvar(mouse);
        repoProdutos.salvar(teclado);

        System.out.println("Produtos salvos: " + repoProdutos.contar());

        // Buscando por ID
        Optional<Produto> produtoEncontrado = repoProdutos.buscarPorId("P002");
        produtoEncontrado.ifPresent(p -> System.out.println("Encontrado: " + p));

        // Listando todos
        List<Produto> todosProdutos = repoProdutos.listarTodos();
        System.out.println("Todos os produtos:");
        todosProdutos.forEach(System.out::println);

        // Verificando se a lista é imutável
        try {
            todosProdutos.add(new Produto("P004", "Teste", BigDecimal.ONE, 1));
            System.out.println("❌ Lista foi modificada (inesperado)");
        } catch (Exception e) {
            System.out.println("✅ Lista é imutável: " + e.getClass().getSimpleName());
        }
    }

    private static void testarRepositorioFuncionarios() {
        IRepository<Funcionario, Long> repoFuncionarios = new InMemoryRepository<>();

        // Criando funcionários
        Funcionario joao = new Funcionario(1L, "João Silva", "Desenvolvedor", new BigDecimal("5000.00"));
        Funcionario maria = new Funcionario(2L, "Maria Santos", "Gerente", new BigDecimal("8000.00"));
        Funcionario pedro = new Funcionario(3L, "Pedro Oliveira", "Analista", new BigDecimal("3500.00"));

        // Salvando funcionários
        repoFuncionarios.salvar(joao);
        repoFuncionarios.salvar(maria);
        repoFuncionarios.salvar(pedro);

        System.out.println("Funcionários salvos: " + repoFuncionarios.contar());

        // Buscando por ID
        Optional<Funcionario> funcEncontrado = repoFuncionarios.buscarPorId(2L);
        funcEncontrado.ifPresent(f -> System.out.println("Encontrado: " + f));

        // Removendo funcionário
        repoFuncionarios.remover(1L);
        System.out.println("Após remoção: " + repoFuncionarios.contar() + " funcionários");

        // Tentando remover ID inexistente
        try {
            repoFuncionarios.remover(999L);
            System.out.println("❌ Remoção de ID inexistente funcionou (inesperado)");
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("✅ Exceção ao remover ID inexistente: " + e.getMessage());
        }
    }

    private static void testarOperacoesAvancadas() {
        IRepository<Produto, String> repo = new InMemoryRepository<>();

        // Teste de salvamento e atualização
        Produto produto = new Produto("P100", "Produto Teste", new BigDecimal("100.00"), 10);
        repo.salvar(produto);

        // Tentativa de salvar entidade nula
        try {
            repo.salvar(null);
            System.out.println("❌ Entidade nula foi salva (inesperado)");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Entidade nula rejeitada: " + e.getMessage());
        }

        // Busca por ID inexistente
        Optional<Produto> naoEncontrado = repo.buscarPorId("ID_INEXISTENTE");
        System.out.println("Busca por ID inexistente: " + naoEncontrado.isPresent());

        // Verificação de existência
        System.out.println("Existe P100? " + repo.existe("P100"));
        System.out.println("Existe P999? " + repo.existe("P999"));

        // Teste de concorrência básico - CORREÇÃO AQUI
        System.out.println("\nTeste de concorrência:");
        IRepository<Funcionario, Long> repoConcorrente = new InMemoryRepository<>();

        Runnable tarefa = () -> {
            long threadId = Thread.currentThread().getId();
            for (int i = 1; i <= 50; i++) { // Começa de 1, não de 0
                long idUnico = threadId * 1000 + i; // Garante IDs únicos entre threads
                Funcionario f = new Funcionario(idUnico, "Func " + idUnico, "Cargo", BigDecimal.ONE);
                repoConcorrente.salvar(f);
            }
        };

        Thread t1 = new Thread(tarefa);
        Thread t2 = new Thread(tarefa);

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("Total após operações concorrentes: " + repoConcorrente.contar());

        // Demonstração do uso de Optional
        System.out.println("\nDemonstração do Optional:");
        repo.buscarPorId("P100")
                .map(Produto::getNome)
                .ifPresent(nome -> System.out.println("Nome do produto: " + nome));

        repo.buscarPorId("INEXISTENTE")
                .ifPresentOrElse(
                        p -> System.out.println("Produto encontrado: " + p),
                        () -> System.out.println("Produto não encontrado")
                );
    }
}
