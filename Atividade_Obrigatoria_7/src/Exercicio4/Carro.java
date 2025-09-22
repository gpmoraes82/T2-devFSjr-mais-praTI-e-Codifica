package Exercicio4;

public class Carro extends MeioTransporteBase {
    private int marchaAtual;
    private boolean freioDeMaoAcionado;

    public Carro(String modelo, int velocidadeMaxima) {
        super(modelo, velocidadeMaxima);
        this.marchaAtual = 0; // Ponto morto
        this.freioDeMaoAcionado = true;
    }

    @Override
    public void acelerar(int incremento) throws VelocidadeInvalidaException {
        if (!ligado) {
            throw new IllegalStateException("Carro precisa estar ligado para acelerar");
        }
        if (freioDeMaoAcionado) {
            throw new IllegalStateException("Freio de mão está acionado");
        }
        if (incremento <= 0) {
            throw new IllegalArgumentException("Incremento deve ser positivo");
        }

        int novaVelocidade = velocidadeAtual + incremento;
        validarVelocidade(novaVelocidade);

        velocidadeAtual = novaVelocidade;
        atualizarMarcha();

        System.out.printf("Carro %s acelerou %d km/h → Velocidade: %d km/h (Marcha: %d)%n",
                modelo, incremento, velocidadeAtual, marchaAtual);
    }

    @Override
    public void frear(int decremento) throws VelocidadeInvalidaException {
        if (decremento <= 0) {
            throw new IllegalArgumentException("Decremento deve ser positivo");
        }

        int novaVelocidade = Math.max(0, velocidadeAtual - decremento);
        validarVelocidade(novaVelocidade);

        velocidadeAtual = novaVelocidade;
        atualizarMarcha();

        System.out.printf("Carro %s freou %d km/h → Velocidade: %d km/h (Marcha: %d)%n",
                modelo, decremento, velocidadeAtual, marchaAtual);
    }

    private void atualizarMarcha() {
        if (velocidadeAtual == 0) {
            marchaAtual = 0; // Ponto morto
        } else if (velocidadeAtual <= 20) {
            marchaAtual = 1;
        } else if (velocidadeAtual <= 40) {
            marchaAtual = 2;
        } else if (velocidadeAtual <= 60) {
            marchaAtual = 3;
        } else if (velocidadeAtual <= 80) {
            marchaAtual = 4;
        } else {
            marchaAtual = 5;
        }
    }

    public void liberarFreioDeMao() {
        this.freioDeMaoAcionado = false;
        System.out.println("Freio de mão liberado");
    }

    public void acionarFreioDeMao() {
        this.freioDeMaoAcionado = true;
        System.out.println("Freio de mão acionado");
    }

    public int getMarchaAtual() {
        return marchaAtual;
    }

    public boolean isFreioDeMaoAcionado() {
        return freioDeMaoAcionado;
    }

    @Override
    public void ligar() {
        super.ligar();
        System.out.println("Motor do carro está funcionando");
    }
}
