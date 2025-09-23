package Exercicio5;

import java.math.BigDecimal;

public class Pix extends FormaPagamento {
    private String chave;
    private String tipo; // CPF, Email, Telefone, etc.
    private String titular;

    public Pix(String chave, String tipo, String titular) {
        super();
        this.chave = chave;
        this.tipo = tipo;
        this.titular = titular;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        // Valida chave básica
        if (chave == null || chave.trim().isEmpty()) {
            throw new PagamentoInvalidoException("Chave PIX inválida");
        }

        // Validações simples por tipo
        switch (tipo.toLowerCase()) {
            case "cpf":
                if (!chave.matches("\\d{11}")) {
                    throw new PagamentoInvalidoException("CPF inválido");
                }
                break;
            case "email":
                if (!chave.contains("@")) {
                    throw new PagamentoInvalidoException("Email inválido");
                }
                break;
            case "telefone":
                if (!chave.matches("\\d{10,11}")) {
                    throw new PagamentoInvalidoException("Telefone inválido");
                }
                break;
        }

        System.out.println("✓ PIX validado com sucesso");
    }

    @Override
    public String processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento();
        validarValor(valor);

        // Simula processamento instantâneo
        System.out.printf("📱 PIX: %s → R$ %.2f\n", getChaveMascarada(), valor);

        return "PX-" + System.currentTimeMillis();
    }

    private String getChaveMascarada() {
        return switch (tipo.toLowerCase()) {
            case "cpf" -> "***." + chave.substring(3, 6) + "." + chave.substring(6, 9) + "-**";
            case "email" -> {
                int pos = chave.indexOf('@');
                yield chave.substring(0, 2) + "***" + chave.substring(pos);
            }
            case "telefone" -> "(**) *****-" + chave.substring(chave.length() - 4);
            default -> chave.substring(0, 3) + "***" + chave.substring(chave.length() - 3);
        };
    }

    @Override
    public String getDescricao() {
        return String.format("PIX %s (%s)", getChaveMascarada(), titular);
    }

    // Getters
    public String getChave() { return chave; }
    public String getTipo() { return tipo; }
    public String getTitular() { return titular; }
}
