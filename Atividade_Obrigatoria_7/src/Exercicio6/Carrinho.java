package Exercicio6;

import java.util.*;

public final class Carrinho {
    private final List<ItemCarrinho> itens;
    private final double descontoPercentual;

    // Carrinho vazio
    public Carrinho() {
        this.itens = List.of();
        this.descontoPercentual = 0.0;
    }

    // Construtor privado para operações
    private Carrinho(List<ItemCarrinho> itens, double descontoPercentual) {
        this.itens = List.copyOf(itens); // Torna a lista imutável
        this.descontoPercentual = descontoPercentual;
    }

    // Operações que retornam novo carrinho
    public Carrinho adicionarItem(ItemCarrinho novoItem) {
        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);

        // Verifica se o produto já existe no carrinho
        Optional<ItemCarrinho> itemExistente = encontrarItem(novoItem.getProduto().getId());

        if (itemExistente.isPresent()) {
            // Atualiza quantidade do item existente
            ItemCarrinho itemAtualizado = itemExistente.get()
                    .comQuantidade(itemExistente.get().getQuantidade() + novoItem.getQuantidade());

            // Remove o antigo e adiciona o atualizado
            novosItens.removeIf(item -> item.getProduto().getId().equals(novoItem.getProduto().getId()));
            novosItens.add(itemAtualizado);
        } else {
            // Adiciona novo item
            novosItens.add(novoItem);
        }

        return new Carrinho(novosItens, this.descontoPercentual);
    }

    public Carrinho removerItem(String produtoId) {
        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);
        novosItens.removeIf(item -> item.getProduto().getId().equals(produtoId));
        return new Carrinho(novosItens, this.descontoPercentual);
    }

    public Carrinho atualizarQuantidade(String produtoId, int novaQuantidade) {
        if (novaQuantidade <= 0) {
            return removerItem(produtoId);
        }

        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);
        for (int i = 0; i < novosItens.size(); i++) {
            ItemCarrinho item = novosItens.get(i);
            if (item.getProduto().getId().equals(produtoId)) {
                novosItens.set(i, item.comQuantidade(novaQuantidade));
                return new Carrinho(novosItens, this.descontoPercentual);
            }
        }

        throw new IllegalArgumentException("Produto não encontrado no carrinho: " + produtoId);
    }

    public Carrinho aplicarCupom(double percentualDesconto) {
        if (percentualDesconto < 0) {
            throw new IllegalArgumentException("Desconto não pode ser negativo");
        }
        if (percentualDesconto > 30.0) {
            throw new IllegalArgumentException("Desconto máximo é 30%");
        }

        return new Carrinho(this.itens, percentualDesconto);
    }

    public Carrinho limparCarrinho() {
        return new Carrinho();
    }

    // Cálculos
    public Dinheiro calcularSubtotal() {
        Dinheiro subtotal = new Dinheiro(0.0, getMoedaBase());
        for (ItemCarrinho item : itens) {
            subtotal = subtotal.adicionar(item.calcularSubtotal());
        }
        return subtotal;
    }

    public Dinheiro calcularDesconto() {
        if (descontoPercentual == 0.0) {
            return new Dinheiro(0.0, getMoedaBase());
        }
        return calcularSubtotal().aplicarDesconto(descontoPercentual);
    }

    public Dinheiro calcularTotal() {
        return calcularSubtotal().subtrair(calcularDesconto());
    }

    private Dinheiro.Moeda getMoedaBase() {
        if (itens.isEmpty()) {
            return Dinheiro.Moeda.REAL;
        }
        return itens.get(0).getProduto().getPreco().getMoeda();
    }

    // Buscas
    private Optional<ItemCarrinho> encontrarItem(String produtoId) {
        return itens.stream()
                .filter(item -> item.getProduto().getId().equals(produtoId))
                .findFirst();
    }

    // Getters
    public List<ItemCarrinho> getItens() {
        return itens; // Lista já é imutável
    }

    public double getDescontoPercentual() {
        return descontoPercentual;
    }

    public boolean estaVazio() {
        return itens.isEmpty();
    }

    public int getQuantidadeTotal() {
        return itens.stream().mapToInt(ItemCarrinho::getQuantidade).sum();
    }

    @Override
    public String toString() {
        if (estaVazio()) {
            return "Carrinho vazio";
        }

        StringBuilder sb = new StringBuilder();
        sb.append("Carrinho de Compras:\n");

        for (ItemCarrinho item : itens) {
            sb.append("  ").append(item).append("\n");
        }

        sb.append(String.format("Subtotal: %s\n", calcularSubtotal()));

        if (descontoPercentual > 0) {
            sb.append(String.format("Desconto (%.1f%%): -%s\n", descontoPercentual, calcularDesconto()));
        }

        sb.append(String.format("Total: %s", calcularTotal()));

        return sb.toString();
    }
}
