package Exercicio4;

public class Bicicleta extends MeioTransporteBase {
    private int marchaAtual;
    private final int totalMarchas;

    public Bicicleta(String modelo, int velocidadeMaxima, int totalMarchas) {
        super(modelo, velocidadeMaxima);
        if (totalMarchas <= 0) {
            throw new IllegalArgumentException("Total de marchas deve ser positivo");
        }
        this.totalMarchas = totalMarchas;
        this.marchaAtual = 1;
        this.ligado = true; // Bicicleta sempre "ligada"
    }

    @Override
    public void acelerar(int incremento) throws VelocidadeInvalidaException {
        if (incremento <= 0) {
            throw new IllegalArgumentException("Incremento deve ser positivo");
        }

        // Bicicleta acelera mais lentamente que carro
        int incrementoEfetivo = incremento / 2;
        if (incrementoEfetivo == 0) incrementoEfetivo = 1;

        int novaVelocidade = velocidadeAtual + incrementoEfetivo;
        validarVelocidade(novaVelocidade);

        velocidadeAtual = novaVelocidade;
        System.out.printf("Bicicleta %s acelerou %d km/h (efetivo: %d) → Velocidade: %d km/h (Marcha: %d/%d)%n",
                modelo, incremento, incrementoEfetivo, velocidadeAtual, marchaAtual, totalMarchas);
    }

    @Override
    public void frear(int decremento) throws VelocidadeInvalidaException {
        if (decremento <= 0) {
            throw new IllegalArgumentException("Decremento deve ser positivo");
        }

        // Bicicleta freia mais rapidamente
        int decrementoEfetivo = decremento * 2;

        int novaVelocidade = Math.max(0, velocidadeAtual - decrementoEfetivo);
        validarVelocidade(novaVelocidade);

        velocidadeAtual = novaVelocidade;
        System.out.printf("Bicicleta %s freou %d km/h (efetivo: %d) → Velocidade: %d km/h%n",
                modelo, decremento, decrementoEfetivo, velocidadeAtual);
    }

    public void mudarMarcha(int novaMarcha) {
        if (novaMarcha < 1 || novaMarcha > totalMarchas) {
            throw new IllegalArgumentException("Marcha inválida: " + novaMarcha +
                    ". Deve ser entre 1 e " + totalMarchas);
        }
        this.marchaAtual = novaMarcha;
        System.out.printf("Bicicleta %s mudou para marcha %d/%d%n",
                modelo, marchaAtual, totalMarchas);
    }

    public int getMarchaAtual() {
        return marchaAtual;
    }

    public int getTotalMarchas() {
        return totalMarchas;
    }

    @Override
    public void ligar() {
        System.out.println("Bicicleta está pronta para uso");
    }

    @Override
    public void desligar() {
        System.out.println("Bicicleta estacionada");
    }
}
