package Exercicio6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public enum Moeda {
        REAL("R$"), DOLAR("US$"), EURO("€");

        private final String simbolo;

        Moeda(String simbolo) {
            this.simbolo = simbolo;
        }

        public String getSimbolo() {
            return simbolo;
        }
    }

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null) {
            throw new IllegalArgumentException("Valor não pode ser nulo");
        }
        if (moeda == null) {
            throw new IllegalArgumentException("Moeda não pode ser nula");
        }
        if (valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor não pode ser negativo");
        }

        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public Dinheiro(double valor, Moeda moeda) {
        this(BigDecimal.valueOf(valor), moeda);
    }

    // Métodos de acesso
    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    // Operações matemáticas (retornam novas instâncias)
    public Dinheiro adicionar(Dinheiro outro) {
        validarMoeda(outro);
        return new Dinheiro(this.valor.add(outro.valor), this.moeda);
    }

    public Dinheiro subtrair(Dinheiro outro) {
        validarMoeda(outro);
        BigDecimal resultado = this.valor.subtract(outro.valor);
        if (resultado.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Resultado não pode ser negativo");
        }
        return new Dinheiro(resultado, this.moeda);
    }

    public Dinheiro multiplicar(int quantidade) {
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser positiva");
        }
        return new Dinheiro(this.valor.multiply(BigDecimal.valueOf(quantidade)), this.moeda);
    }

    public Dinheiro aplicarDesconto(double percentual) {
        if (percentual < 0 || percentual > 100) {
            throw new IllegalArgumentException("Percentual deve estar entre 0 e 100");
        }
        BigDecimal desconto = this.valor.multiply(BigDecimal.valueOf(percentual / 100));
        BigDecimal resultado = this.valor.subtract(desconto);
        return new Dinheiro(resultado, this.moeda);
    }

    private void validarMoeda(Dinheiro outro) {
        if (!this.moeda.equals(outro.moeda)) {
            throw new IllegalArgumentException("Moedas diferentes: " + this.moeda + " vs " + outro.moeda);
        }
    }

    // equals e hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return valor.compareTo(dinheiro.valor) == 0 && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return String.format("%s %.2f", moeda.getSimbolo(), valor);
    }
}