package Exercicio2;

public class DescontoInvalidoException extends IllegalArgumentException {
    public DescontoInvalidoException(String mensagem) {
        super(mensagem);
    }

    public DescontoInvalidoException(String mensagem, Throwable causa) {
        super(mensagem, causa);
    }
}