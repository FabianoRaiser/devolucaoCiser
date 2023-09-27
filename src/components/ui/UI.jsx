import styled from "styled-components";
import { cor_azulClaro, cor_azulEscuro, cor_vermelho } from "./variaveis";

export const Botao = styled.button`

  background-color: ${cor_vermelho};
  color: white;
  font-weight: 700;

  border-radius: 0.5rem;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;

export const Input = styled.input``;

export const Label = styled.p`
  color: ${cor_azulClaro};
  font-weight: 700;
`;

export const ToolBar = styled.aside`
  border-right: 1px solid ${cor_azulClaro};
  padding: 1rem;

  width: 15%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h3 {
    font-size: 1.25rem;
    color: ${cor_azulEscuro};

    border-bottom: 1px solid ${cor_azulClaro};

    text-align: center;

    padding: 0.5rem;
  }

`
