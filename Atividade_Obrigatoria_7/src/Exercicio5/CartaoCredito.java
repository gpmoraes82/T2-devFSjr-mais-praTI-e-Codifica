package Exercicio5;

import java.math.BigDecimal;
import java.time.YearMonth;

public class CartaoCredito extends FormaPagamento {
    private String numero;
    private String titular;
    private YearMonth validade;
    private String cvv;
    private BigDecimal limite;

    public CartaoCredito(String numero, String titular, YearMonth validade, String cvv, BigDecimal limite) {
        super();
        this.numero = numero.replaceAll("\\s+", "");
        this.titular = titular;
        this.validade = validade;
        this.cvv = cvv;
        this.limite = limite;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        // Valida número (mínimo 13 dígitos)
        if (numero == null || numero.length() < 13) {
            throw new PagamentoInvalidoException("Número do cartão inválido");
        }

        // Valida data
        if (validade.isBefore(YearMonth.now())) {
            throw new PagamentoInvalidoException("Cartão expirado");
        }

        // Valida CVV
        if (cvv == null || cvv.length() < 3) {
            throw new PagamentoInvalidoException("CVV inválido");
        }

        System.out.println("✓ Cartão validado com sucesso");
    }

    @Override
    public String processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento();
        validarValor(valor);

        // Simula processamento
        System.out.printf("💳 Cartão: %s → R$ %.2f\n", getNumeroMascarado(), valor);

        return "CC-" + System.currentTimeMillis();
    }

    private String getNumeroMascarado() {
        if (numero.length() <= 4) return numero;
        return "****" + numero.substring(numero.length() - 4);
    }

    @Override
    public String getDescricao() {
        return String.format("Cartão %s (Limite: R$ %.2f)", getNumeroMascarado(), limite);
    }

    // Getters
    public String getNumero() { return numero; }
    public String getTitular() { return titular; }
    public YearMonth getValidade() { return validade; }
}
