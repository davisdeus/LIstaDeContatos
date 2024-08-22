import { useSelector } from 'react-redux'

import Contatos from '../../components/Contatos'
import * as S from '../../styles/index'
import { RooReducer } from '../../store'


const ListaDeContatos = () => {
  const { itens } = useSelector((state: RooReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector((state: RooReducer) => state.buscar)

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'familia') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categorias === valor
        )
      }
      else if (criterio === 'trabalho') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categorias === valor
        )
      }
      else if (criterio === 'pessoal') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categorias === valor
        )
      }
      return contatosFiltrados

    } else {
      return itens
    }
  }

  const contatos = filtrarContatos()

  return (
    <S.MainContainer>
      <S.Titulo as='P'>
        {contatos.length} Contato(s) marcados como Categoria : "{criterio}"
      </S.Titulo>

      <ul>
        {contatos.map((c) => (
          <li key={c.titulo}>
            <Contatos
              categorias={c.categorias}
              titulo={c.titulo}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />

          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}

export default ListaDeContatos
