package Exercicio4;

import java.util.ArrayList;
import java.util.List;

public class MainTransportes {
    public static void main(String[] args) {
        System.out.println("=== DEMONSTRAÇÃO DE POLIMORFISMO COM MEIOS DE TRANSPORTE ===\n");

        // Criando lista de meios de transporte
        List<IMeioTransporte> transportes = new ArrayList<>();

        // Adicionando diferentes tipos de transporte
        try {
            transportes.add(new Carro("Fusca", 120));
            transportes.add(new Carro("Ferrari", 300));
            transportes.add(new Bicicleta("Caloi", 40, 18));
            transportes.add(new Bicicleta("MTB", 60, 24));
            transportes.add(new Trem("Expresso", 160, 8));
            transportes.add(new Trem("Metrô", 100, 6));

            System.out.println("✅ Meios de transporte criados com sucesso!\n");
        } catch (Exception e) {
            System.out.println("❌ Erro ao criar transportes: " + e.getMessage());
            return;
        }

        // Demonstração 1: Polimorfismo básico
        System.out.println("1. POLIMORFISMO BÁSICO - ACELERAR E FREAR:\n");
        demonstrarPolimorfismoBasico(transportes);

        // Demonstração 2: Operações específicas com type casting
        System.out.println("\n2. OPERAÇÕES ESPECÍFICAS DE CADA TRANSPORTE:\n");
        demonstrarOperacoesEspecificas(transportes);

        // Demonstração 3: Tratamento de exceções
        System.out.println("\n3. TRATAMENTO DE EXCEÇÕES - OPERAÇÕES INVÁLIDAS:\n");
        demonstrarTratamentoExcecoes(transportes);

        // Demonstração 4: Cenário complexo
        System.out.println("\n4. CENÁRIO COMPLEXO - SIMULAÇÃO COMPLETA:\n");
        simularCenarioCompleto(transportes);
    }

    private static void demonstrarPolimorfismoBasico(List<IMeioTransporte> transportes) {
        for (IMeioTransporte transporte : transportes) {
            System.out.println("--- " + transporte.getClass().getSimpleName() + " ---");
            System.out.println("Estado inicial: " + transporte);

            try {
                // Preparar transporte específico
                prepararTransporte(transporte);

                // Acelerar - comportamento polimórfico
                transporte.acelerar(30);
                System.out.println("Após acelerar: " + transporte);

                // Frear - comportamento polimórfico
                transporte.frear(10);
                System.out.println("Após frear: " + transporte);

                // Parar completamente
                transporte.pararCompletamente();
                System.out.println("Após parar: " + transporte);

            } catch (Exception e) {
                System.out.println("❌ Erro durante operação: " + e.getMessage());
            }
            System.out.println();
        }
    }

    private static void prepararTransporte(IMeioTransporte transporte) {
        if (transporte instanceof Carro carro) {
            carro.ligar();
            carro.liberarFreioDeMao();
        } else if (transporte instanceof Trem trem) {
            trem.ligar();
        } else if (transporte instanceof Bicicleta) {
            // Bicicleta já está "ligada" por padrão
        }
    }

    private static void demonstrarOperacoesEspecificas(List<IMeioTransporte> transportes) {
        for (IMeioTransporte transporte : transportes) {
            System.out.println("--- " + transporte.getClass().getSimpleName() + " ---");

            if (transporte instanceof Carro carro) {
                System.out.println("Operações específicas do carro:");
                carro.acionarFreioDeMao();
                System.out.println("Marcha atual: " + carro.getMarchaAtual());

            } else if (transporte instanceof Bicicleta bicicleta) {
                System.out.println("Operações específicas da bicicleta:");
                bicicleta.mudarMarcha(3);
                System.out.println("Marchas: " + bicicleta.getMarchaAtual() +
                        "/" + bicicleta.getTotalMarchas());

            } else if (transporte instanceof Trem trem) {
                System.out.println("Operações específicas do trem:");
                System.out.println("Vagões: " + trem.getNumeroVagoes());
                trem.retornarAosTrilhos();
            }
            System.out.println();
        }
    }

    private static void demonstrarTratamentoExcecoes(List<IMeioTransporte> transportes) {
        System.out.println("Testando operações inválidas:");

        // Teste 1: Acelerar além do limite
        try {
            IMeioTransporte trem = transportes.get(4); // Trem Expresso
            prepararTransporte(trem);
            System.out.println("Tentando acelerar trem a 200 km/h:");
            trem.acelerar(200); // Deve falhar
        } catch (VelocidadeInvalidaException e) {
            System.out.println("✅ VelocidadeInvalidaException capturada: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("❌ Outra exceção: " + e.getMessage());
        }

        // Teste 2: Acelerar com valores negativos
        try {
            IMeioTransporte bike = transportes.get(2); // Bicicleta Caloi
            System.out.println("Tentando acelerar com incremento negativo:");
            bike.acelerar(-10); // Deve falhar
        } catch (IllegalArgumentException e) {
            System.out.println("✅ IllegalArgumentException capturada: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("❌ Outra exceção: " + e.getMessage());
        }

        // Teste 3: Trem fora dos trilhos
        try {
            Trem trem = (Trem) transportes.get(4);
            trem.sairDosTrilhos();
            System.out.println("Tentando acelerar trem fora dos trilhos:");
            trem.acelerar(50); // Deve falhar
        } catch (IllegalStateException e) {
            System.out.println("✅ IllegalStateException capturada: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("❌ Outra exceção: " + e.getMessage());
        }
    }

    private static void simularCenarioCompleto(List<IMeioTransporte> transportes) {
        System.out.println("Simulação completa de viagem:");

        for (IMeioTransporte transporte : transportes) {
            System.out.println("\n=== VIAGEM COM " + transporte.getClass().getSimpleName().toUpperCase() + " ===");

            try {
                // Preparar viagem
                prepararTransporte(transporte);

                // Fase de aceleração
                System.out.println("🚀 Fase de aceleração:");
                for (int i = 0; i < 3; i++) {
                    transporte.acelerar(20);
                    Thread.sleep(100); // Pequena pausa para efeito visual
                }

                // Cruzeiro
                System.out.println("🚗 Em cruzeiro: " + transporte);
                Thread.sleep(200);

                // Fase de desaceleração
                System.out.println("🛑 Fase de frenagem:");
                while (transporte.estaEmMovimento()) {
                    transporte.frear(15);
                    Thread.sleep(100);
                }

                System.out.println("✅ Viagem concluída com sucesso!");

            } catch (VelocidadeInvalidaException e) {
                System.out.println("⚠️  Aviso de velocidade: " + e.getMessage());
            } catch (InterruptedException e) {
                System.out.println("⏸️  Simulação interrompida");
            } catch (Exception e) {
                System.out.println("❌ Erro na simulação: " + e.getMessage());
            }
        }
    }
}
