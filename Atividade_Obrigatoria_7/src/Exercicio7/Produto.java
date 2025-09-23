package Exercicio7;

import java.math.BigDecimal;
import java.util.Objects;

public class Produto implements Identificavel<String> {
    private final String id;
    private final String nome;
    private final BigDecimal preco;
    private final int estoque;

    public Produto(String id, String nome, BigDecimal preco, int estoque) {
        if (id == null || id.trim().isEmpty()) {
            throw new IllegalArgumentException("ID não pode ser vazio");
        }
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser vazio");
        }
        if (preco == null || preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Preço inválido");
        }
        if (estoque < 0) {
            throw new IllegalArgumentException("Estoque não pode ser negativo");
        }

        this.id = id.trim();
        this.nome = nome.trim();
        this.preco = preco;
        this.estoque = estoque;
    }

    @Override
    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public int getEstoque() {
        return estoque;
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
        return String.format("Produto[ID: %s, Nome: %s, Preço: R$ %.2f, Estoque: %d]",
                id, nome, preco, estoque);
    }
}