package Exercicio3;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

public class Desenvolvedor extends Funcionario {
    private String linguagem;
    private List<String> tecnologias;
    private int nivel; // 1: Júnior, 2: Pleno, 3: Sênior

    // Construtor
    public Desenvolvedor(String nome, BigDecimal salario, String linguagem, int nivel) {
        super(nome, salario);
        setLinguagem(linguagem);
        setNivel(nivel);
        this.tecnologias = new ArrayList<>();
    }

    // Getter e Setter para linguagem
    public String getLinguagem() {
        return linguagem;
    }

    public void setLinguagem(String linguagem) {
        if (linguagem == null || linguagem.trim().isEmpty()) {
            throw new IllegalArgumentException("Linguagem não pode ser nula ou vazia");
        }
        this.linguagem = linguagem.trim();
    }

    // Getter e Setter para nível
    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        if (nivel < 1 || nivel > 3) {
            throw new IllegalArgumentException("Nível deve ser entre 1 e 3 (1-Júnior, 2-Pleno, 3-Sênior)");
        }
        this.nivel = nivel;
    }

    // Métodos para gerenciar tecnologias
    public List<String> getTecnologias() {
        return new ArrayList<>(tecnologias);
    }

    public void adicionarTecnologia(String tecnologia) {
        if (tecnologia != null && !tecnologia.trim().isEmpty()) {
            this.tecnologias.add(tecnologia.trim());
        }
    }

    // Implementação do método abstrato - 10% de bônus
    @Override
    public BigDecimal calcularBonus() {
        return salario.multiply(BigDecimal.valueOf(0.10))
                .setScale(2, RoundingMode.HALF_UP);
    }

    // Bônus adicional baseado no nível
    public BigDecimal calcularBonusComNivel() {
        BigDecimal bonusBase = calcularBonus();
        BigDecimal bonusNivel = BigDecimal.ZERO;

        switch (nivel) {
            case 2: // Pleno
                bonusNivel = salario.multiply(BigDecimal.valueOf(0.05));
                break;
            case 3: // Sênior
                bonusNivel = salario.multiply(BigDecimal.valueOf(0.10));
                break;
        }

        return bonusBase.add(bonusNivel).setScale(2, RoundingMode.HALF_UP);
    }

    // Método específico do Desenvolvedor
    public void desenvolverFeature(String feature) {
        System.out.println(nome + " está desenvolvendo a feature: " + feature + " em " + linguagem);
    }

    @Override
    public String toString() {
        String nivelStr = switch(nivel) {
            case 1 -> "Júnior";
            case 2 -> "Pleno";
            case 3 -> "Sênior";
            default -> "Desconhecido";
        };

        return String.format("Desenvolvedor %s: %s | Linguagem: %s | %s",
                nivelStr, nome, linguagem, super.toString());
    }
}