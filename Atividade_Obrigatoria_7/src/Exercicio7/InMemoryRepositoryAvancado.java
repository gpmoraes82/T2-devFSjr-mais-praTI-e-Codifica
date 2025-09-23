package Exercicio7;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class InMemoryRepositoryAvancado<T extends Identificavel<ID>, ID> extends InMemoryRepository<T, ID> {

    public List<T> buscarPorFiltro(Predicate<T> filtro) {
        return listarTodos().stream()
                .filter(filtro)
                .collect(Collectors.toList());
    }

    public boolean atualizar(ID id, T novaEntidade) {
        if (!existe(id)) {
            return false;
        }

        if (!id.equals(novaEntidade.getId())) {
            throw new IllegalArgumentException("ID da entidade não corresponde ao ID fornecido");
        }

        salvar(novaEntidade);
        return true;
    }

    public void salvarTodos(List<T> entidades) {
        if (entidades == null) {
            throw new IllegalArgumentException("Lista de entidades não pode ser nula");
        }

        for (T entidade : entidades) {
            salvar(entidade);
        }
    }
}