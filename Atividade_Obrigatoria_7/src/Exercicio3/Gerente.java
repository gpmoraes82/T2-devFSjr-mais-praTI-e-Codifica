package Exercicio3;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Gerente extends Funcionario {
    private String departamento;
    private int equipeSize;

    // Construtor
    public Gerente(String nome, BigDecimal salario, String departamento, int equipeSize) {
        super(nome, salario);
        setDepartamento(departamento);
        setEquipeSize(equipeSize);
    }

    // Getter e Setter para departamento
    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        if (departamento == null || departamento.trim().isEmpty()) {
            throw new IllegalArgumentException("Departamento não pode ser nulo ou vazio");
        }
        this.departamento = departamento.trim();
    }

    // Getter e Setter para tamanho da equipe
    public int getEquipeSize() {
        return equipeSize;
    }

    public void setEquipeSize(int equipeSize) {
        if (equipeSize < 0) {
            throw new IllegalArgumentException("Tamanho da equipe não pode ser negativo");
        }
        this.equipeSize = equipeSize;
    }

    // Implementação do método abstrato - 20% de bônus
    @Override
    public BigDecimal calcularBonus() {
        return salario.multiply(BigDecimal.valueOf(0.20))
                .setScale(2, RoundingMode.HALF_UP);
    }

    // Método específico do Gerente
    public void promoverMembroEquipe() {
        if (equipeSize > 0) {
            System.out.println(nome + " está promovendo um membro da equipe do departamento " + departamento);
        } else {
            System.out.println(nome + " não tem membros na equipe para promover");
        }
    }

    @Override
    public String toString() {
        return String.format("Gerente: %s | Depto: %s | Equipe: %d pessoas | %s",
                nome, departamento, equipeSize, super.toString());
    }
}
