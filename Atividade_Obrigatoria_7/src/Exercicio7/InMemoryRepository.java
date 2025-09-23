package Exercicio7;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> bancoDeDados = new ConcurrentHashMap<>();

    @Override
    public T salvar(T entidade) {
        if (entidade == null) {
            throw new IllegalArgumentException("Entidade não pode ser nula");
        }

        ID id = entidade.getId();
        if (id == null) {
            throw new IllegalArgumentException("ID da entidade não pode ser nulo");
        }

        bancoDeDados.put(id, entidade);
        return entidade;
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        if (id == null) {
            throw new IllegalArgumentException("ID não pode ser nulo");
        }

        return Optional.ofNullable(bancoDeDados.get(id));
    }

    @Override
    public List<T> listarTodos() {
        // Retorna cópia imutável da lista
        return List.copyOf(bancoDeDados.values());
    }

    @Override
    public void remover(ID id) {
        if (id == null) {
            throw new IllegalArgumentException("ID não pode ser nulo");
        }

        if (!bancoDeDados.containsKey(id)) {
            throw new EntidadeNaoEncontradaException("Entidade com ID " + id + " não encontrada");
        }

        bancoDeDados.remove(id);
    }

    @Override
    public boolean existe(ID id) {
        return bancoDeDados.containsKey(id);
    }

    @Override
    public int contar() {
        return bancoDeDados.size();
    }

    // Método adicional útil
    public void limpar() {
        bancoDeDados.clear();
    }
}