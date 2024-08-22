import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatosSlice'
import buscarReducer from './reducers/buscar'

const store = configureStore({
  reducer: {
    contatos: contatoReducer,
    buscar: buscarReducer

  },
})

export type RooReducer = ReturnType<typeof store.getState>

export default store
