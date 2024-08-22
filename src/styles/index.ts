import styled, { createGlobalStyle } from 'styled-components'
import { CtCardBotao } from '../components/Contatos/styles'
import variaveis from './variaveis'

const StyleGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
export const MainContainer = styled.main`
  margin-top: 25px;
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

`

export const Titulo = styled.h2`
  font-weight: bold;
  margin-bottom: 20px;
`
export const CampoInput = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 16px;
  border-color: #666666;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  width: 100%;
`

export const BotaoSalvar = styled(CtCardBotao)`
  background-color: ${variaveis.verde};
`

export default StyleGlobal
