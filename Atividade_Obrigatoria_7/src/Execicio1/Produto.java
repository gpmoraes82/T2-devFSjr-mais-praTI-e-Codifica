package Execicio1;

public class Produto {
    private String nome;
    private double preco;
    private int quantidadeEmEstoque;

    // Construtor padrão
    public Produto() {
    }

    // Construtor com parâmetros
    public Produto(String nome, double preco, int quantidadeEmEstoque) {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    // Getter para nome
    public String getNome() {
        return nome;
    }

    // Setter para nome com validação
    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio");
        }
        this.nome = nome.trim();
    }

    // Getter para preço
    public double getPreco() {
        return preco;
    }

    // Setter para preço com validação
    public void setPreco(double preco) {
        if (preco < 0) {
            throw new IllegalArgumentException("Preço não pode ser negativo");
        }
        this.preco = preco;
    }

    // Getter para quantidade em estoque
    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    // Setter para quantidade em estoque com validação
    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        if (quantidadeEmEstoque < 0) {
            throw new IllegalArgumentException("Quantidade em estoque não pode ser negativa");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    // Método para calcular o valor total em estoque
    public double getValorTotalEmEstoque() {
        return preco * quantidadeEmEstoque;
    }

    // Método para adicionar quantidade ao estoque
    public void adicionarEstoque(int quantidade) {
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade a adicionar deve ser positiva");
        }
        this.quantidadeEmEstoque += quantidade;
    }

    // Método para remover quantidade do estoque
    public void removerEstoque(int quantidade) {
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade a remover deve ser positiva");
        }
        if (quantidade > quantidadeEmEstoque) {
            throw new IllegalArgumentException("Quantidade a remover excede o estoque disponível");
        }
        this.quantidadeEmEstoque -= quantidade;
    }

    @Override
    public String toString() {
        return String.format("Produto: %s | Preço: R$ %.2f | Estoque: %d unidades | Valor Total: R$ %.2f",
                nome, preco, quantidadeEmEstoque, getValorTotalEmEstoque());
    }
}