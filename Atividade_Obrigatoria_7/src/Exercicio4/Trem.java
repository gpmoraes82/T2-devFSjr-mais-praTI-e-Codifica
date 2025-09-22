package Exercicio4;

public class Trem extends MeioTransporteBase {
    private int numeroVagoes;
    private boolean nosTrilhos;

    public Trem(String modelo, int velocidadeMaxima, int numeroVagoes) {
        super(modelo, velocidadeMaxima);
        if (numeroVagoes <= 0) {
            throw new IllegalArgumentException("Número de vagões deve ser positivo");
        }
        this.numeroVagoes = numeroVagoes;
        this.nosTrilhos = true;
    }

    @Override
    public void acelerar(int incremento) throws VelocidadeInvalidaException {
        if (!nosTrilhos) {
            throw new IllegalStateException("Trem não está nos trilhos");
        }
        if (!ligado) {
            throw new IllegalStateException("Trem precisa estar ligado para acelerar");
        }
        if (incremento <= 0) {
            throw new IllegalArgumentException("Incremento deve ser positivo");
        }

        // Trem acelera muito lentamente devido ao peso
        int incrementoEfetivo = incremento / (numeroVagoes / 2 + 1);
        if (incrementoEfetivo == 0) incrementoEfetivo = 1;

        int novaVelocidade = velocidadeAtual + incrementoEfetivo;
        validarVelocidade(novaVelocidade);

        velocidadeAtual = novaVelocidade;
        System.out.printf("Trem %s acelerou %d km/h (efetivo: %d) → Velocidade: %d km/h (%d vagões)%n",
                modelo, incremento, incrementoEfetivo, velocidadeAtual, numeroVagoes);
    }

    @Override
    public void frear(int decremento) throws VelocidadeInvalidaException {
        if (decremento <= 0) {
            throw new IllegalArgumentException("Decremento deve ser positivo");
        }

        // Trem freia muito lentamente devido à inércia
        int decrementoEfetivo = decremento / (numeroVagoes / 3 + 1);
        if (decrementoEfetivo == 0) decrementoEfetivo = 1;

        int novaVelocidade = Math.max(0, velocidadeAtual - decrementoEfetivo);
        validarVelocidade(novaVelocidade);

        velocidadeAtual = novaVelocidade;
        System.out.printf("Trem %s freou %d km/h (efetivo: %d) → Velocidade: %d km/h%n",
                modelo, decremento, decrementoEfetivo, velocidadeAtual);
    }

    public void sairDosTrilhos() {
        this.nosTrilhos = false;
        pararCompletamente();
        System.out.println("⚠️  ATENÇÃO: Trem saiu dos trilhos!");
    }

    public void retornarAosTrilhos() {
        this.nosTrilhos = true;
        System.out.println("Trem retornou aos trilhos");
    }

    public boolean isNosTrilhos() {
        return nosTrilhos;
    }

    public int getNumeroVagoes() {
        return numeroVagoes;
    }

    @Override
    public void ligar() {
        super.ligar();
        System.out.println("Maquinista a postos, trem pronto para partir");
    }
}
