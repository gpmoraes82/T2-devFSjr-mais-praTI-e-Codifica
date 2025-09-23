package Exercicio5;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    private String id;
    private boolean ativo;

    public FormaPagamento() {
        this.id = java.util.UUID.randomUUID().toString().substring(0, 8);
        this.ativo = true;
    }

    public abstract void validarPagamento() throws PagamentoInvalidoException;

    public abstract String processarPagamento(BigDecimal valor) throws PagamentoInvalidoException;

    protected void validarValor(BigDecimal valor) throws PagamentoInvalidoException {
        if (valor == null) {
            throw new PagamentoInvalidoException("Valor não pode ser nulo");
        }

        if (valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new PagamentoInvalidoException("Valor deve ser positivo: R$ " + valor);
        }

        if (!ativo) {
            throw new PagamentoInvalidoException("Forma de pagamento desativada");
        }
    }

    // Getters e Setters
    public String getId() { return id; }
    public boolean isAtivo() { return ativo; }
    public void setAtivo(boolean ativo) { this.ativo = ativo; }

    public abstract String getDescricao();
}
