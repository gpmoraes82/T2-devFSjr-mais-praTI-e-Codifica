package Exercicio6;

import java.util.Objects;

public final class Produto {
    private final String id;
    private final String nome;
    private final Dinheiro preco;
    private final int estoque;

    public Produto(String id, String nome, Dinheiro preco, int estoque) {
        if (id == null || id.trim().isEmpty()) {
            throw new IllegalArgumentException("ID não pode ser vazio");
        }
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser vazio");
        }
        if (preco == null) {
            throw new IllegalArgumentException("Preço não pode ser nulo");
        }
        if (estoque < 0) {
            throw new IllegalArgumentException("Estoque não pode ser negativo");
        }

        this.id = id.trim();
        this.nome = nome.trim();
        this.preco = preco;
        this.estoque = estoque;
    }

    // Getters
    public String getId() { return id; }
    public String getNome() { return nome; }
    public Dinheiro getPreco() { return preco; }
    public int getEstoque() { return estoque; }

    public Produto comEstoqueAtualizado(int novoEstoque) {
        return new Produto(id, nome, preco, novoEstoque);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Produto produto = (Produto) o;
        return Objects.equals(id, produto.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return String.format("%s - %s (%s) - Estoque: %d", id, nome, preco, estoque);
    }
}