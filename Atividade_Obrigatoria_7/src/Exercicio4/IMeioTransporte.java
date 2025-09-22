package Exercicio4;

public interface IMeioTransporte {
    /**
     * Aumenta a velocidade do meio de transporte
     * @param incremento Quantidade a acelerar (pode ser negativo para desacelerar)
     * @throws VelocidadeInvalidaException Se a operação resultar em velocidade inválida
     */
    void acelerar(int incremento) throws VelocidadeInvalidaException;

    /**
     * Reduz a velocidade do meio de transporte
     * @param decremento Quantidade a frear
     * @throws VelocidadeInvalidaException Se a operação resultar em velocidade inválida
     */
    void frear(int decremento) throws VelocidadeInvalidaException;

    /**
     * @return Velocidade atual do meio de transporte
     */
    int getVelocidadeAtual();

    /**
     * @return Velocidade máxima permitida
     */
    int getVelocidadeMaxima();

    /**
     * @return true se o meio de transporte está em movimento
     */
    boolean estaEmMovimento();

    /**
     * Para completamente o meio de transporte
     */
    void pararCompletamente();
}
