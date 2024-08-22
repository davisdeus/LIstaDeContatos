import * as S from './styles'
import * as enums from '../../utils/enums/contatosEnums'
import { useDispatch } from 'react-redux'
import { alterarBuscar } from '../../store/reducers/buscar'
import { useSelector } from 'react-redux'
import { RooReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'familia' | 'trabalho' | 'pessoal' | 'todas'
  valor?: enums.Categorias
}

const FiltroCard = ({legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { buscar, contatos } = useSelector((state: RooReducer) => state)

  const estaAtivo = () => {
    const msmCriterio = buscar.criterio === criterio
    const msmValor = buscar.valor === valor

    return msmCriterio && msmValor
  }

  const contadorContatos = () => {
    if (criterio === 'todas') return contatos.itens.length
    if (valor === enums.Categorias.FAMILIA) {
      return contatos.itens.filter((item) => item.categorias === 'familia').length
    }
    else if (valor === enums.Categorias.TRABALHO) {
      return contatos.itens.filter((item) => item.categorias === 'trabalho').length
    }
    else if (valor === enums.Categorias.PESSOAL) {
      return contatos.itens.filter((item) => item.categorias === 'pessoal').length
    }

  }

  const filtra = () => {
    dispatch(alterarBuscar({
      criterio,
      valor
    }))
  }

  const contador = contadorContatos()
  const ativo = estaAtivo()

  return (
    <S.FiltroCard ativo={ativo} onClick={filtra}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.FiltroCard>
  )
}

export default FiltroCard
