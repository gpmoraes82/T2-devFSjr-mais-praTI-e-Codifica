package Exercicio6;

public class TesteCarrinho {
    public static void main(String[] args) {
        System.out.println("=== CARRINHO DE COMPRAS IMUTÁVEL ===\n");

        // Criando alguns produtos
        Produto notebook = new Produto("P001", "Notebook", new Dinheiro(2500.00, Dinheiro.Moeda.REAL), 10);
        Produto mouse = new Produto("P002", "Mouse", new Dinheiro(89.90, Dinheiro.Moeda.REAL), 50);
        Produto teclado = new Produto("P003", "Teclado", new Dinheiro(150.00, Dinheiro.Moeda.REAL), 25);

        System.out.println("📦 Produtos criados:");
        System.out.println("1. " + notebook);
        System.out.println("2. " + mouse);
        System.out.println("3. " + teclado);
        System.out.println();

        // Teste 1: Carrinho vazio
        System.out.println("1. CARRINHO VAZIO:");
        Carrinho carrinho = new Carrinho();
        System.out.println(carrinho);
        System.out.println();

        // Teste 2: Adicionar itens
        System.out.println("2. ADICIONANDO ITENS:");
        carrinho = carrinho.adicionarItem(new ItemCarrinho(notebook, 1));
        carrinho = carrinho.adicionarItem(new ItemCarrinho(mouse, 2));
        carrinho = carrinho.adicionarItem(new ItemCarrinho(teclado, 1));
        System.out.println(carrinho);
        System.out.println();

        // Teste 3: Atualizar quantidade
        System.out.println("3. ATUALIZANDO QUANTIDADE:");
        carrinho = carrinho.atualizarQuantidade("P002", 3); // Mouse: 2 → 3
        System.out.println(carrinho);
        System.out.println();

        // Teste 4: Adicionar produto existente (deve somar quantidades)
        System.out.println("4. ADICIONANDO PRODUTO EXISTENTE:");
        carrinho = carrinho.adicionarItem(new ItemCarrinho(notebook, 1)); // Notebook: 1 → 2
        System.out.println(carrinho);
        System.out.println();

        // Teste 5: Aplicar cupom de desconto
        System.out.println("5. APLICANDO CUPOM DE 10%:");
        carrinho = carrinho.aplicarCupom(10.0);
        System.out.println(carrinho);
        System.out.println();

        // Teste 6: Tentar desconto inválido
        System.out.println("6. TENTANDO DESCONTO INVÁLIDO (40%):");
        try {
            carrinho.aplicarCupom(40.0);
            System.out.println("❌ Desconto aceito (inesperado)");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ " + e.getMessage());
        }
        System.out.println();

        // Teste 7: Remover item
        System.out.println("7. REMOVENDO ITEM (Mouse):");
        carrinho = carrinho.removerItem("P002");
        System.out.println(carrinho);
        System.out.println();

        // Teste 8: Aplicar máximo desconto permitido
        System.out.println("8. APLICANDO DESCONTO MÁXIMO (30%):");
        carrinho = carrinho.aplicarCupom(30.0);
        System.out.println(carrinho);
        System.out.println();

        // Teste 9: Limpar carrinho
        System.out.println("9. LIMPANDO CARRINHO:");
        carrinho = carrinho.limparCarrinho();
        System.out.println(carrinho);
        System.out.println();

        // Teste 10: Imutabilidade
        System.out.println("10. DEMONSTRANDO IMUTABILIDADE:");
        Carrinho carrinho1 = new Carrinho();
        Carrinho carrinho2 = carrinho1.adicionarItem(new ItemCarrinho(notebook, 1));
        Carrinho carrinho3 = carrinho2.adicionarItem(new ItemCarrinho(mouse, 1));

        System.out.println("Carrinho 1 (original): " + carrinho1.estaVazio());
        System.out.println("Carrinho 2 (com notebook): " + carrinho2.getQuantidadeTotal() + " itens");
        System.out.println("Carrinho 3 (com notebook + mouse): " + carrinho3.getQuantidadeTotal() + " itens");
        System.out.println();

        // Teste 11: Operações com Dinheiro
        System.out.println("11. OPERAÇÕES COM DINHEIRO:");
        Dinheiro preco = new Dinheiro(100.0, Dinheiro.Moeda.REAL);
        System.out.println("Preço: " + preco);
        System.out.println("2 unidades: " + preco.multiplicar(2));
        System.out.println("20% de desconto: " + preco.aplicarDesconto(20.0));
        System.out.println();

        // Teste 12: Validações
        System.out.println("12. TESTANDO VALIDAÇÕES:");
        try {
            new ItemCarrinho(notebook, -1);
            System.out.println("❌ Quantidade negativa aceita");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Quantidade negativa rejeitada: " + e.getMessage());
        }

        try {
            new ItemCarrinho(notebook, 100); // Estoque insuficiente
            System.out.println("❌ Estoque insuficiente aceito");
        } catch (IllegalArgumentException e) {
            System.out.println("✅ Estoque insuficiente rejeitado: " + e.getMessage());
        }

        System.out.println("\n=== TESTES CONCLUÍDOS ===");
    }
}
