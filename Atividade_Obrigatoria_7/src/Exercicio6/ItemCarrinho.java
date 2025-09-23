package Exercicio6;

import java.util.Objects;

public final class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;

    public ItemCarrinho(Produto produto, int quantidade) {
        if (produto == null) {
            throw new IllegalArgumentException("Produto não pode ser nulo");
        }
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser positiva");
        }
        if (quantidade > produto.getEstoque()) {
            throw new IllegalArgumentException("Quantidade excede o estoque disponível");
        }

        this.produto = produto;
        this.quantidade = quantidade;
    }

    // Getters
    public Produto getProduto() { return produto; }
    public int getQuantidade() { return quantidade; }

    public Dinheiro calcularSubtotal() {
        return produto.getPreco().multiplicar(quantidade);
    }

    public ItemCarrinho comQuantidade(int novaQuantidade) {
        return new ItemCarrinho(produto, novaQuantidade);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemCarrinho that = (ItemCarrinho) o;
        return Objects.equals(produto.getId(), that.produto.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(produto.getId());
    }

    @Override
    public String toString() {
        return String.format("%d x %s = %s", quantidade, produto.getNome(), calcularSubtotal());
    }
}