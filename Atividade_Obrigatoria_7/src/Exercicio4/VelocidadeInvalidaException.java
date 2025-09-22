package Exercicio4;

public class VelocidadeInvalidaException extends Exception {
    private final int velocidadeTentada;
    private final int velocidadeMaxima;
    private final String tipoTransporte;

    public VelocidadeInvalidaException(String mensagem, int velocidadeTentada,
                                       int velocidadeMaxima, String tipoTransporte) {
        super(mensagem);
        this.velocidadeTentada = velocidadeTentada;
        this.velocidadeMaxima = velocidadeMaxima;
        this.tipoTransporte = tipoTransporte;
    }

    public int getVelocidadeTentada() {
        return velocidadeTentada;
    }

    public int getVelocidadeMaxima() {
        return velocidadeMaxima;
    }

    public String getTipoTransporte() {
        return tipoTransporte;
    }

    @Override
    public String getMessage() {
        return String.format("%s (Velocidade tentada: %d, Máxima permitida: %d, Transporte: %s)",
                super.getMessage(), velocidadeTentada, velocidadeMaxima, tipoTransporte);
    }
}
