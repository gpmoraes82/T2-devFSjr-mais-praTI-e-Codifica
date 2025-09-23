package Exercicio8;

import java.math.BigDecimal;

public class TesteStrategyFrete {
    public static void main(String[] args) {
        System.out.println("=== PADRÃO STRATEGY - CÁLCULO DE FRETE ===\n");

        // Teste 1: Estratégias básicas
        System.out.println("1. ESTRATÉGIAS BÁSICAS:");
        testarEstrategiasBasicas();

        // Teste 2: Troca de estratégia em tempo de execução
        System.out.println("\n2. TROCA DE ESTRATÉGIA EM TEMPO DE EXECUÇÃO:");
        testarTrocaEstrategia();

        // Teste 3: Estratégias com lambdas
        System.out.println("\n3. ESTRATÉGIAS COM LAMBDAS:");
        testarEstrategiasLambda();

        // Teste 4: Validações e erros
        System.out.println("\n4. VALIDAÇÕES E TRATAMENTO DE ERROS:");
        testarValidacoes();

        // Teste 5: Composição de estratégias
        System.out.println("\n5. COMPOSIÇÃO DE ESTRATÉGIAS:");
        testarComposicaoEstrategias();
    }

    private static void testarEstrategiasBasicas() {
        // Pedido com Sedex
        Pedido pedido1 = new Pedido("01234-567", EstrategiasFrete.SEDEX);
        pedido1.adicionarItem("Notebook", new BigDecimal("2500.00"), 2.5, 1);

        System.out.println(pedido1);
        BigDecimal frete1 = pedido1.calcularFrete();
        System.out.printf("Frete Sedex: R$ %.2f\n", frete1);
        System.out.printf("Total: R$ %.2f\n\n", pedido1.getValorTotal().add(frete1));

        // Mesmo pedido com PAC
        Pedido pedido2 = new Pedido("01234-567", EstrategiasFrete.PAC);
        pedido2.adicionarItem("Notebook", new BigDecimal("2500.00"), 2.5, 1);

        System.out.println(pedido2);
        BigDecimal frete2 = pedido2.calcularFrete();
        System.out.printf("Frete PAC: R$ %.2f\n", frete2);
        System.out.printf("Total: R$ %.2f\n\n", pedido2.getValorTotal().add(frete2));

        // Retirada na loja
        Pedido pedido3 = new Pedido("01234-567", EstrategiasFrete.RETIRADA_NA_LOJA);
        pedido3.adicionarItem("Notebook", new BigDecimal("2500.00"), 2.5, 1);

        System.out.println(pedido3);
        BigDecimal frete3 = pedido3.calcularFrete();
        System.out.printf("Frete Retirada: R$ %.2f\n", frete3);
        System.out.printf("Total: R$ %.2f\n", pedido3.getValorTotal().add(frete3));
    }

    private static void testarTrocaEstrategia() {
        Pedido pedido = new Pedido("12345-678", EstrategiasFrete.SEDEX);
        pedido.adicionarItem("Mouse", new BigDecimal("89.90"), 0.3, 2);
        pedido.adicionarItem("Teclado", new BigDecimal("150.00"), 0.8, 1);

        System.out.println("Pedido criado com Sedex:");
        System.out.println(pedido);
        System.out.printf("Frete inicial (Sedex): R$ %.2f\n", pedido.calcularFrete());

        // Troca para PAC em tempo de execução
        pedido.setEstrategiaFrete(EstrategiasFrete.PAC);
        System.out.printf("Frete após troca (PAC): R$ %.2f\n", pedido.calcularFrete());

        // Troca para retirada na loja
        pedido.setEstrategiaFrete(EstrategiasFrete.RETIRADA_NA_LOJA);
        System.out.printf("Frete após troca (Retirada): R$ %.2f\n", pedido.calcularFrete());
    }

    private static void testarEstrategiasLambda() {
        // Frete grátis para pedidos acima de R$ 300,00 (usando PAC como base)
        CalculadoraFrete fretePromocional = EstrategiasFrete.freteGratisAcimaDe(
                new BigDecimal("300.00"),
                EstrategiasFrete.PAC
        );

        // Pedido abaixo do valor mínimo
        Pedido pedidoPequeno = new Pedido("23456-789", fretePromocional);
        pedidoPequeno.adicionarItem("Mouse", new BigDecimal("89.90"), 0.3, 1);

        System.out.println("Pedido pequeno (R$ " + pedidoPequeno.getValorTotal() + "):");
        System.out.printf("Frete: R$ %.2f\n", pedidoPequeno.calcularFrete());

        // Pedido acima do valor mínimo
        Pedido pedidoGrande = new Pedido("23456-789", fretePromocional);
        pedidoGrande.adicionarItem("Notebook", new BigDecimal("2500.00"), 2.5, 1);

        System.out.println("\nPedido grande (R$ " + pedidoGrande.getValorTotal() + "):");
        System.out.printf("Frete: R$ %.2f\n", pedidoGrande.calcularFrete());

        // Estratégia com desconto regional (lambda customizada)
        CalculadoraFrete descontoSul = EstrategiasFrete.descontoParaRegiao("9", 20.0, EstrategiasFrete.SEDEX);

        Pedido pedidoSul = new Pedido("98765-432", descontoSul); // CEP começa com 9 (Sul)
        pedidoSul.adicionarItem("Tablet", new BigDecimal("1200.00"), 0.6, 1);

        System.out.println("\nPedido para região Sul:");
        System.out.println(pedidoSul);
        System.out.printf("Frete com desconto regional: R$ %.2f\n", pedidoSul.calcularFrete());
    }

    private static void testarValidacoes() {
        // Teste com CEP inválido
        try {
            new Pedido("1234", EstrategiasFrete.SEDEX); // CEP muito curto
            System.out.println("❌ CEP inválido foi aceito (inesperado)");
        } catch (CepInvalidoException e) {
            System.out.println("✅ CEP inválido rejeitado: " + e.getMessage());
        }

        try {
            new Pedido("ABCDE-FGH", EstrategiasFrete.SEDEX); // CEP com letras
            System.out.println("❌ CEP com letras foi aceito (inesperado)");
        } catch (CepInvalidoException e) {
            System.out.println("✅ CEP com letras rejeitado: " + e.getMessage());
        }

        // Teste com pedido vazio
        Pedido pedidoVazio = new Pedido("12345-678", EstrategiasFrete.SEDEX);
        System.out.println("\nPedido vazio:");
        System.out.printf("Frete: R$ %.2f\n", pedidoVazio.calcularFrete());
    }

    private static void testarComposicaoEstrategias() {
        System.out.println("Composição de estratégias:");

        // Estratégia complexa: frete grátis acima de R$ 500 + desconto regional
        CalculadoraFrete estrategiaComplexa = pedido -> {
            // Primeiro verifica frete grátis
            if (pedido.getValorTotal().compareTo(new BigDecimal("500.00")) >= 0) {
                System.out.println("✓ Frete grátis por valor alto");
                return BigDecimal.ZERO;
            }

            // Calcula frete base com Sedex
            BigDecimal freteBase = EstrategiasFrete.SEDEX.calcular(pedido);

            // Aplica desconto para região 0 (SP)
            if (pedido.getCep().startsWith("0")) {
                BigDecimal desconto = freteBase.multiply(BigDecimal.valueOf(0.15)); // 15%
                freteBase = freteBase.subtract(desconto);
                System.out.println("✓ Desconto de 15% para São Paulo");
            }

            return freteBase;
        };

        // Teste com diferentes cenários
        Pedido[] pedidos = {
                new Pedido("01234-567", estrategiaComplexa), // SP, valor baixo
                new Pedido("98765-432", estrategiaComplexa), // Sul, valor baixo
                new Pedido("01234-567", estrategiaComplexa)  // SP, valor alto
        };

        pedidos[0].adicionarItem("Livro", new BigDecimal("49.90"), 0.4, 2); // R$ 99,80
        pedidos[1].adicionarItem("Livro", new BigDecimal("49.90"), 0.4, 2); // R$ 99,80
        pedidos[2].adicionarItem("Smartphone", new BigDecimal("1500.00"), 0.3, 1); // R$ 1500,00

        for (int i = 0; i < pedidos.length; i++) {
            System.out.printf("\nPedido %d: %s\n", i + 1, pedidos[i]);
            System.out.printf("Frete calculado: R$ %.2f\n", pedidos[i].calcularFrete());
        }

        // Estratégia usando método de composição
        CalculadoraFrete estrategiaComposta = EstrategiasFrete.freteGratisAcimaDe(
                new BigDecimal("400.00"),
                EstrategiasFrete.descontoParaRegiao("0", 10.0, EstrategiasFrete.PAC)
        );

        Pedido pedidoComposto = new Pedido("01234-567", estrategiaComposta);
        pedidoComposto.adicionarItem("Fone", new BigDecimal("199.90"), 0.2, 1);

        System.out.println("\nEstratégia composta:");
        System.out.println(pedidoComposto);
        System.out.printf("Frete: R$ %.2f\n", pedidoComposto.calcularFrete());
    }
}