import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/contatosEnums'

type TagProps = {
  categorias?: enums.Categorias
}

function retornarCorDeFundo(props: TagProps): string {
  switch (props.categorias) {
    case enums.Categorias.TRABALHO:
      return variaveis.azul;
    case enums.Categorias.FAMILIA:
      return variaveis.verde;
    case enums.Categorias.PESSOAL:
      return variaveis.amarelo;
    default:
      return variaveis.cinza
  }
}

export const CtCard = styled.div`
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 70vw;

  @media(max-width: 1024px){
    margin-right: 30px;
    width: 68vw;
  }
  @media(max-width: 935px){
    width: 45vw;
  }
`

export const CtCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  height: 20vh;

  @media (max-width: 1024px) {
    display: block;
    height: 700px;
    height: 70vh;
  }

`

export const CtCardContainerInputs = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const CtCardCategoria = styled.span<TagProps>`
  font-weight: bold;
  background-color: ${(props) => retornarCorDeFundo(props)};
  border-radius: 6px;
  font-size: 16px;
  color: ${variaveis.branco};
  padding: 8px 12px;
  margin: 0 16px 0 16px;
  width: 5vw;
  font-size: 12px;

  @media (max-width: 1024px) {
    margin-left: 0px;
  }
`

export const CtCardNome = styled.textarea`
  color: black;
  font-size: 10px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  cursor: pointer;
  background-color: transparent;
  border: none;
  resize: none;
  margin-left: 10px;
  display: block;
  width: 100%;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }

`
export const CtCardTelefone = styled.textarea`
  color: black;
  font-size: 10px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  cursor: pointer;
  background-color: transparent;
  border: none;
  resize: none;
  margin: 8px;
  margin-left: 10px;
`

export const CtCardEmail = styled.textarea`
  color: black;
  font-size: 10px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  cursor: pointer;
  background-color: transparent;
  border: none;
  resize: none;
  margin-left: 10px;

`
export const CtCardBarraAcoes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  padding: 16px;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr ;
    gap: 8px;
  }
`
export const CtCardBotao = styled.button`
  background-color: gray;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 6px 8px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 16px;

  @media (max-width: 1024px) {
    margin-left: -15px;
    width: 100%;
    font-size: 14px;
  }

`

export const BotaoExcluir = styled(CtCardBotao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoCancelar = styled(CtCardBotao)`
  background-color: ${variaveis.laranja};
`
export const BotaoEditar = styled(CtCardBotao)`
  background-color: ${variaveis.azul};
`
