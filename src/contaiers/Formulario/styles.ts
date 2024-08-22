import { styled } from "styled-components";
import variaveis from "../../styles/variaveis";

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
`

export const Opcoes = styled.h3`
  margin-bottom: 16px;

  h3 {
    margin-top: 20px;
    margin-bottom: 8px;
  }
  input {
    margin-right: 4px;
  }
  label {
    margin-right: 46px;
    color: ${variaveis.cinza};
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
