package Exercicio7;

import java.math.BigDecimal;
import java.util.Objects;

public class Funcionario implements Identificavel<Long> {
    private final Long id;
    private final String nome;
    private final String cargo;
    private final BigDecimal salario;

    public Funcionario(Long id, String nome, String cargo, BigDecimal salario) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("ID inválido");
        }
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser vazio");
        }
        if (cargo == null || cargo.trim().isEmpty()) {
            throw new IllegalArgumentException("Cargo não pode ser vazio");
        }
        if (salario == null || salario.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Salário inválido");
        }

        this.id = id;
        this.nome = nome.trim();
        this.cargo = cargo.trim();
        this.salario = salario;
    }

    @Override
    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCargo() {
        return cargo;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Funcionario that = (Funcionario) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return String.format("Funcionario[ID: %d, Nome: %s, Cargo: %s, Salário: R$ %.2f]",
                id, nome, cargo, salario);
    }
}

