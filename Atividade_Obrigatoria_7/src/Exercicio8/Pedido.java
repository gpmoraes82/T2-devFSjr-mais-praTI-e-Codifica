package Exercicio8;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Pedido {
    private String cep;
    private BigDecimal valorTotal;
    private double peso;
    private List<Item> itens;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(String cep, CalculadoraFrete estrategiaFrete) {
        setCep(cep);
        this.valorTotal = BigDecimal.ZERO;
        this.peso = 0.0;
        this.itens = new ArrayList<>();
        this.estrategiaFrete = estrategiaFrete;
    }

    public void adicionarItem(String nome, BigDecimal preco, double peso, int quantidade) {
        Item item = new Item(nome, preco, peso, quantidade);
        itens.add(item);

        this.valorTotal = this.valorTotal.add(item.getSubtotal());
        this.peso += item.getPesoTotal();
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }

    public void setEstrategiaFrete(CalculadoraFrete estrategiaFrete) {
        this.estrategiaFrete = estrategiaFrete;
    }

    // Validação de CEP
    private void setCep(String cep) {
        if (cep == null || !cep.matches("\\d{5}-?\\d{3}")) {
            throw new CepInvalidoException("CEP inválido: " + cep);
        }
        this.cep = cep.replace("-", "");
    }

    // Getters
    public String getCep() { return cep; }
    public BigDecimal getValorTotal() { return valorTotal; }
    public double getPeso() { return peso; }
    public List<Item> getItens() { return itens; }
    public CalculadoraFrete getEstrategiaFrete() { return estrategiaFrete; }

    @Override
    public String toString() {
        return String.format("Pedido para CEP: %s | Valor: R$ %.2f | Peso: %.2f kg",
                cep, valorTotal, peso);
    }

    // Classe interna para itens
    public static class Item {
        private String nome;
        private BigDecimal preco;
        private double pesoUnitario;
        private int quantidade;

        public Item(String nome, BigDecimal preco, double pesoUnitario, int quantidade) {
            this.nome = nome;
            this.preco = preco;
            this.pesoUnitario = pesoUnitario;
            this.quantidade = quantidade;
        }

        public BigDecimal getSubtotal() {
            return preco.multiply(BigDecimal.valueOf(quantidade));
        }

        public double getPesoTotal() {
            return pesoUnitario * quantidade;
        }

        // Getters
        public String getNome() { return nome; }
        public BigDecimal getPreco() { return preco; }
        public double getPesoUnitario() { return pesoUnitario; }
        public int getQuantidade() { return quantidade; }
    }
}