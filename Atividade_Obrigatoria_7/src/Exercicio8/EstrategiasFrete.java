package Exercicio8;

import java.math.BigDecimal;

public class EstrategiasFrete {

    // Estratégia Sedex
    public static final CalculadoraFrete SEDEX = pedido -> {
        validarCep(pedido.getCep());
        double peso = pedido.getPeso();

        // Tabela simplificada de preços
        if (peso <= 0.5) return new BigDecimal("25.00");
        if (peso <= 1.0) return new BigDecimal("30.00");
        if (peso <= 2.0) return new BigDecimal("35.00");
        if (peso <= 5.0) return new BigDecimal("45.00");
        if (peso <= 10.0) return new BigDecimal("60.00");

        // Acima de 10kg: R$ 60 + R$ 5 por kg adicional
        double kgAdicional = peso - 10.0;
        return new BigDecimal("60.00").add(BigDecimal.valueOf(kgAdicional * 5.0));
    };

    // Estratégia PAC
    public static final CalculadoraFrete PAC = pedido -> {
        validarCep(pedido.getCep());
        double peso = pedido.getPeso();

        // Tabela simplificada de preços (mais barato que Sedex)
        if (peso <= 0.5) return new BigDecimal("15.00");
        if (peso <= 1.0) return new BigDecimal("18.00");
        if (peso <= 2.0) return new BigDecimal("22.00");
        if (peso <= 5.0) return new BigDecimal("28.00");
        if (peso <= 10.0) return new BigDecimal("35.00");

        // Acima de 10kg: R$ 35 + R$ 3 por kg adicional
        double kgAdicional = peso - 10.0;
        return new BigDecimal("35.00").add(BigDecimal.valueOf(kgAdicional * 3.0));
    };

    // Estratégia Retirada na Loja (frete grátis)
    public static final CalculadoraFrete RETIRADA_NA_LOJA = pedido -> {
        System.out.println("✓ Cliente optou por retirar na loja");
        return BigDecimal.ZERO;
    };

    // Estratégia personalizada via lambda (frete grátis acima de valor X)
    public static CalculadoraFrete freteGratisAcimaDe(BigDecimal valorMinimo, CalculadoraFrete estrategiaBase) {
        return pedido -> {
            if (pedido.getValorTotal().compareTo(valorMinimo) >= 0) {
                System.out.println("✓ Frete grátis! Pedido acima de R$ " + valorMinimo);
                return BigDecimal.ZERO;
            }
            return estrategiaBase.calcular(pedido);
        };
    }

    // Estratégia com desconto regional
    public static CalculadoraFrete descontoParaRegiao(String regiao, double percentualDesconto, CalculadoraFrete estrategiaBase) {
        return pedido -> {
            BigDecimal freteBase = estrategiaBase.calcular(pedido);

            if (pedido.getCep().startsWith(regiao)) {
                BigDecimal desconto = freteBase.multiply(BigDecimal.valueOf(percentualDesconto / 100));
                BigDecimal freteComDesconto = freteBase.subtract(desconto);
                System.out.printf("✓ Desconto de %.0f%% para região %s\n", percentualDesconto, regiao);
                return freteComDesconto;
            }

            return freteBase;
        };
    }

    // Validação de CEP
    private static void validarCep(String cep) {
        if (cep == null || cep.length() != 8) {
            throw new CepInvalidoException("CEP inválido: " + cep);
        }

        // Validação básica de região (exemplo)
        String regiao = cep.substring(0, 1);
        if (!"0123456789".contains(regiao)) {
            throw new CepInvalidoException("Região do CEP inválida: " + cep);
        }
    }
}