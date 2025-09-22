package Exercicio1;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== DEMONSTRAÇÃO DA CLASSE PRODUTO ===\n");

        // Demonstração 1: Criando instâncias válidas
        System.out.println("1. CRIANDO INSTÂNCIAS VÁLIDAS:");

        try {
            Produto produto1 = new Produto("Notebook", 2500.00, 10);
            System.out.println("Produto 1 criado: " + produto1);

            Produto produto2 = new Produto();
            produto2.setNome("Mouse");
            produto2.setPreco(89.90);
            produto2.setQuantidadeEmEstoque(50);
            System.out.println("Produto 2 criado: " + produto2);

            System.out.println("✅ Instâncias criadas com sucesso!\n");
        } catch (IllegalArgumentException e) {
            System.out.println("❌ Erro inesperado: " + e.getMessage());
        }

        // Demonstração 2: Alterando valores válidos
        System.out.println("2. ALTERANDO VALORES VÁLIDOS:");

        try {
            Produto produto = new Produto("Teclado", 150.00, 20);
            System.out.println("Estado inicial: " + produto);

            // Alterações válidas
            produto.setPreco(129.90);
            produto.setQuantidadeEmEstoque(25);
            produto.adicionarEstoque(10);
            System.out.println("Após alterações: " + produto);

            produto.removerEstoque(15);
            System.out.println("Após remoção: " + produto);

            System.out.println("✅ Alterações realizadas com sucesso!\n");
        } catch (IllegalArgumentException e) {
            System.out.println("❌ Erro inesperado: " + e.getMessage());
        }

        // Demonstração 3: Tentativas de atribuições inválidas
        System.out.println("3. TESTANDO VALIDAÇÕES COM ATRIBUIÇÕES INVÁLIDAS:");

        // Teste 3.1: Nome inválido
        System.out.println("3.1 Testando nome inválido:");
        try {
            Produto produto = new Produto("", 100.00, 10);
            System.out.println("❌ Teste falhou - deveria ter lançado exceção");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }

        try {
            Produto produto = new Produto(null, 100.00, 10);
            System.out.println("❌ Teste falhou - deveria ter lançado exceção");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }

        // Teste 3.2: Preço inválido
        System.out.println("\n3.2 Testando preço inválido:");
        try {
            Produto produto = new Produto("Tablet", -50.00, 5);
            System.out.println("❌ Teste falhou - deveria ter lançado exceção");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }

        try {
            Produto produto = new Produto("Tablet", 100.00, 5);
            produto.setPreco(-10.00);
            System.out.println("❌ Teste falhou - deveria ter lançado exceção");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }

        // Teste 3.3: Quantidade em estoque inválida
        System.out.println("\n3.3 Testando quantidade em estoque inválida:");
        try {
            Produto produto = new Produto("Fone", 50.00, -5);
            System.out.println("❌ Teste falhou - deveria ter lançado exceção");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }

        try {
            Produto produto = new Produto("Fone", 50.00, 10);
            produto.setQuantidadeEmEstoque(-3);
            System.out.println("❌ Teste falhou - deveria ter lançado exceção");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }

        // Teste 3.4: Operações de estoque inválidas
        System.out.println("\n3.4 Testando operações de estoque inválidas:");
        try {
            Produto produto = new Produto("Monitor", 500.00, 5);
            produto.removerEstoque(10); // Tenta remover mais do que tem
            System.out.println("❌ Teste falhou - deveria ter lançado exceção");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }

        try {
            Produto produto = new Produto("Monitor", 500.00, 5);
            produto.adicionarEstoque(-2); // Tenta adicionar quantidade negativa
            System.out.println("❌ Teste falhou - deveria ter lançado exceção");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Exceção capturada: " + e.getMessage());
        }

        System.out.println("\n=== TODOS OS TESTES FORAM CONCLUÍDOS ===");
    }
}