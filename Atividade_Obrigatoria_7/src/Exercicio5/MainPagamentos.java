package Exercicio5;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;

public class MainPagamentos {
    public static void main(String[] args) {
        System.out.println("=== SISTEMA DE PAGAMENTOS SIMPLIFICADO ===\n");

        // Criando lista de formas de pagamento
        List<FormaPagamento> pagamentos = new ArrayList<>();

        // Adicionando diferentes formas de pagamento
        pagamentos.add(new CartaoCredito(
                "1234567812345678",
                "João Silva",
                YearMonth.of(2025, 12),
                "123",
                new BigDecimal("1000.00")
        ));

        pagamentos.add(new Boleto(
                "12345678901234567890123456789012345678901234",
                LocalDate.now().plusDays(7),
                "Loja ABC"
        ));

        pagamentos.add(new Pix(
                "12345678901", "CPF", "Maria Santos"
        ));

        pagamentos.add(new Pix(
                "maria@email.com", "Email", "Maria Santos"
        ));

        // Teste 1: Pagamentos válidos
        System.out.println("1. PAGAMENTOS VÁLIDOS:");
        testarPagamentos(pagamentos, new BigDecimal("100.00"));

        // Teste 2: Valores inválidos
        System.out.println("\n2. VALORES INVÁLIDOS:");
        testarValoresInvalidos(pagamentos.get(0));

        // Teste 3: Formas inválidas
        System.out.println("\n3. FORMAS DE PAGAMENTO INVÁLIDAS:");
        testarFormasInvalidas();

        // Teste 4: Polimorfismo
        System.out.println("\n4. DEMONSTRAÇÃO DE POLIMORFISMO:");
        demonstrarPolimorfismo(pagamentos);
    }

    private static void testarPagamentos(List<FormaPagamento> pagamentos, BigDecimal valor) {
        for (FormaPagamento forma : pagamentos) {
            System.out.println("\n--- " + forma.getClass().getSimpleName() + " ---");
            System.out.println("Descrição: " + forma.getDescricao());

            try {
                forma.validarPagamento();
                String id = forma.processarPagamento(valor);
                System.out.println("✅ Sucesso! ID: " + id);
            } catch (PagamentoInvalidoException e) {
                System.out.println("❌ Erro: " + e.getMessage());
            }
        }
    }

    private static void testarValoresInvalidos(FormaPagamento forma) {
        BigDecimal[] valoresInvalidos = {
                BigDecimal.ZERO,
                new BigDecimal("-50.00"),
                null
        };

        for (BigDecimal valor : valoresInvalidos) {
            System.out.print("Testando valor " + valor + ": ");
            try {
                forma.processarPagamento(valor);
                System.out.println("✅ Inesperadamente aceito");
            } catch (PagamentoInvalidoException e) {
                System.out.println("❌ " + e.getMessage());
            } catch (Exception e) {
                System.out.println("💥 Erro: " + e.getClass().getSimpleName());
            }
        }
    }

    private static void testarFormasInvalidas() {
        try {
            // Cartão expirado
            CartaoCredito cartaoExpirado = new CartaoCredito(
                    "1111222233334444",
                    "Teste",
                    YearMonth.of(2020, 1), // Expirado
                    "123",
                    new BigDecimal("500.00")
            );
            cartaoExpirado.processarPagamento(new BigDecimal("100.00"));
            System.out.println("✅ Cartão expirado aceito (inesperado)");
        } catch (PagamentoInvalidoException e) {
            System.out.println("❌ Cartão expirado rejeitado: " + e.getMessage());
        }

        try {
            // Boleto vencido
            Boleto boletoVencido = new Boleto(
                    "1234567890",
                    LocalDate.now().minusDays(1), // Vencido
                    "Teste"
            );
            boletoVencido.processarPagamento(new BigDecimal("50.00"));
            System.out.println("✅ Boleto vencido aceito (inesperado)");
        } catch (PagamentoInvalidoException e) {
            System.out.println("❌ Boleto vencido rejeitado: " + e.getMessage());
        }

        try {
            // PIX inválido
            Pix pixInvalido = new Pix("invalido", "CPF", "Teste");
            pixInvalido.processarPagamento(new BigDecimal("25.00"));
            System.out.println("✅ PIX inválido aceito (inesperado)");
        } catch (PagamentoInvalidoException e) {
            System.out.println("❌ PIX inválido rejeitado: " + e.getMessage());
        }
    }

    private static void demonstrarPolimorfismo(List<FormaPagamento> pagamentos) {
        System.out.println("Processando pagamentos via polimorfismo:");

        BigDecimal[] valores = {
                new BigDecimal("29.90"),
                new BigDecimal("150.00"),
                new BigDecimal("299.50")
        };

        for (int i = 0; i < valores.length; i++) {
            FormaPagamento forma = pagamentos.get(i % pagamentos.size());

            System.out.printf("\n💰 Tentativa %d: ", i + 1);
            try {
                // Polimorfismo: mesma interface, comportamentos diferentes
                String id = forma.processarPagamento(valores[i]);
                System.out.printf("✅ %s processou R$ %.2f (ID: %s)\n",
                        forma.getClass().getSimpleName(), valores[i], id);
            } catch (PagamentoInvalidoException e) {
                System.out.printf("❌ Falha: %s\n", e.getMessage());
            }
        }

        // Estatísticas finais
        System.out.println("\n📊 Resumo do sistema:");
        for (FormaPagamento forma : pagamentos) {
            System.out.println(" - " + forma.getDescricao());
        }
    }
}

