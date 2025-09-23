package Exercicio5;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Boleto extends FormaPagamento {
    private String codigo;
    private LocalDate vencimento;
    private String beneficiario;

    public Boleto(String codigo, LocalDate vencimento, String beneficiario) {
        super();
        this.codigo = codigo;
        this.vencimento = vencimento;
        this.beneficiario = beneficiario;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        // Valida código (deve ter números)
        if (codigo == null || !codigo.matches("\\d+")) {
            throw new PagamentoInvalidoException("Código do boleto inválido");
        }

        // Valida vencimento
        if (vencimento.isBefore(LocalDate.now())) {
            throw new PagamentoInvalidoException("Boleto vencido");
        }

        System.out.println("✓ Boleto validado com sucesso");
    }

    @Override
    public String processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento();
        validarValor(valor);

        // Simula geração do boleto
        System.out.printf("📄 Boleto: %s → R$ %.2f (Vencto: %s)\n",
                beneficiario, valor, vencimento);

        return "BL-" + System.currentTimeMillis();
    }

    @Override
    public String getDescricao() {
        return String.format("Boleto %s (Vencto: %s)", beneficiario, vencimento);
    }

    // Getters
    public String getCodigo() { return codigo; }
    public LocalDate getVencimento() { return vencimento; }
    public String getBeneficiario() { return beneficiario; }
}

