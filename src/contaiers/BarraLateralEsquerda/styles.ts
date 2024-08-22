import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Aside = styled.aside`
  padding: 18px;
  background-color: #eee;
  height: 100vh;

  @media(max-width: 670px){
    width:52vw;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 18px;

  `
export const ContainerBarraLateral = styled.div`
  margin-top: 10px;
  @media(max-width: 670px){
    width:40vw;
  }
`

export const Tag = styled.span`
  padding: 4px 8px;
  color: ${variaveis.branco};
  font-size: 10px;
  font-weight: bold;
  background-color: ${variaveis.laranja};
  border-radius: 8px;
  margin-right: 16px;
`
