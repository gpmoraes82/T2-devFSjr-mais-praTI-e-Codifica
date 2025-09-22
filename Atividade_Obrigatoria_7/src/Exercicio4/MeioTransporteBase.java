package Exercicio4;

public abstract class MeioTransporteBase implements IMeioTransporte {
    protected int velocidadeAtual;
    protected final int velocidadeMaxima;
    protected final String modelo;
    protected boolean ligado;

    public MeioTransporteBase(String modelo, int velocidadeMaxima) {
        if (modelo == null || modelo.trim().isEmpty()) {
            throw new IllegalArgumentException("Modelo não pode ser nulo ou vazio");
        }
        if (velocidadeMaxima <= 0) {
            throw new IllegalArgumentException("Velocidade máxima deve ser positiva");
        }

        this.modelo = modelo.trim();
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
        this.ligado = false;
    }

    @Override
    public int getVelocidadeAtual() {
        return velocidadeAtual;
    }

    @Override
    public int getVelocidadeMaxima() {
        return velocidadeMaxima;
    }

    @Override
    public boolean estaEmMovimento() {
        return velocidadeAtual > 0;
    }

    @Override
    public void pararCompletamente() {
        this.velocidadeAtual = 0;
        System.out.println(getClass().getSimpleName() + " " + modelo + " parou completamente.");
    }

    protected void validarVelocidade(int velocidade) throws VelocidadeInvalidaException {
        if (velocidade < 0) {
            throw new VelocidadeInvalidaException(
                    "Velocidade não pode ser negativa",
                    velocidade, velocidadeMaxima, getClass().getSimpleName()
            );
        }
        if (velocidade > velocidadeMaxima) {
            throw new VelocidadeInvalidaException(
                    "Velocidade excede o limite máximo",
                    velocidade, velocidadeMaxima, getClass().getSimpleName()
            );
        }
    }

    public void ligar() {
        this.ligado = true;
        System.out.println(getClass().getSimpleName() + " " + modelo + " ligado.");
    }

    public void desligar() {
        pararCompletamente();
        this.ligado = false;
        System.out.println(getClass().getSimpleName() + " " + modelo + " desligado.");
    }

    public boolean isLigado() {
        return ligado;
    }

    public String getModelo() {
        return modelo;
    }

    @Override
    public String toString() {
        return String.format("%s %s | Velocidade: %d/%d km/h | %s | %s",
                getClass().getSimpleName(), modelo, velocidadeAtual, velocidadeMaxima,
                ligado ? "Ligado" : "Desligado",
                estaEmMovimento() ? "Em movimento" : "Parado");
    }
}
