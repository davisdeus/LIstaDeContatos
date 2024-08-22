import { useDispatch } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { useSelector } from 'react-redux'
import { RooReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/buscar'

import * as S from './styles'
import { CampoInput } from '../../styles'
import * as enums from '../../utils/enums/contatosEnums'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RooReducer) => state.buscar)

  return (
    <S.Aside>
      <S.ContainerBarraLateral>
        <CampoInput
          type='text'
          placeholder='Buscar'
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Categorias.FAMILIA}
            criterio='familia'
            legenda='Familia'
          />
          <FiltroCard
            valor={enums.Categorias.TRABALHO}
            criterio='trabalho'
            legenda='Trabalho'
          />
          <FiltroCard
            valor={enums.Categorias.PESSOAL}
            criterio='pessoal'
            legenda='Pessoal'
          />
          <FiltroCard criterio='todas' legenda='Todas' />
        </S.Filtros>
      </S.ContainerBarraLateral>
    </S.Aside>
  )
}

export default BarraLateral
