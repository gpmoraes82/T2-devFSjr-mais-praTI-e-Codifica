package Exercicio3;

import java.math.BigDecimal;
import java.math.RoundingMode;

public abstract class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    // Construtor
    public Funcionario(String nome, BigDecimal salario) {
        setNome(nome);
        setSalario(salario);
    }

    // Getters
    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    // Setters com validação
    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio");
        }
        this.nome = nome.trim();
    }

    public void setSalario(BigDecimal salario) {
        if (salario == null) {
            throw new IllegalArgumentException("Salário não pode ser nulo");
        }
        if (salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Salário deve ser positivo: " + salario);
        }
        this.salario = salario.setScale(2, RoundingMode.HALF_UP);
    }

    // Método abstrato para calcular bônus
    public abstract BigDecimal calcularBonus();

    // Método para aumentar salário
    public void aumentarSalario(BigDecimal percentual) {
        if (percentual == null || percentual.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Percentual de aumento deve ser positivo");
        }

        BigDecimal aumento = this.salario.multiply(percentual)
                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        this.salario = this.salario.add(aumento).setScale(2, RoundingMode.HALF_UP);
    }

    @Override
    public String toString() {
        return String.format("%s | Salário: R$ %,.2f | Bônus: R$ %,.2f",
                nome, salario, calcularBonus());
    }
}