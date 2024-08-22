import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contatosEnums'
import ContatoClass from '../../models/ContatoModels'

type ContatosState = {
  itens: ContatoClass[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      categorias: enums.Categorias.TRABALHO,
      titulo: 'David Sousa Ferreira',
      email: 'Davidsousa@gmail.com',
      telefone: '63 991456879',
    },

  ],
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    exluir: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<ContatoClass, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (contatoExiste) {
        alert('Contato com este nome já existe')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { exluir, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
