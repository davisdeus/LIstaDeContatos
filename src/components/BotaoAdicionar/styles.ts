import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Link } from "react-router-dom";

const Circulo = styled(Link)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: ${variaveis.branco};
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-decoration: none;

  @media (max-width: 1024px) {
    position: fixed;
    width: 30px;
    height: 30px;
    font-size: 30px;
    bottom: 40px;
    right: 50px;
  }
`
export default Circulo

