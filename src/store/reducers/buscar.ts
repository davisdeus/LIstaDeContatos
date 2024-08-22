import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contatosEnums'

type BuscarState = {
  termo?: string
  criterio: 'familia' | 'trabalho' | 'pessoal' | 'todas'
  valor?: enums.Categorias
}

const initialState: BuscarState = {
  termo: '',
  criterio: 'todas',
}

const buscarSlice = createSlice({
  name: 'buscar',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarBuscar: (state, action: PayloadAction<BuscarState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarBuscar } = buscarSlice.actions
export default buscarSlice.reducer

