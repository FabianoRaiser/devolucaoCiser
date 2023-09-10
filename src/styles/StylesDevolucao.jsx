import { cor_azulEscuro } from "components/ui/variaveis";
import styled from "styled-components";

export const StyledFilas = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  justify-content: space-evenly;

  gap: 1em;

  @media (min-width: 31rem) {
    > section:nth-last-child(even) {
      border-right: 1px solid ${cor_azulEscuro};
      padding-right: 1em;
    }
  }

  @media (min-width: 64rem) {
    > section:nth-last-child(n + 2) {
      border-right: 1px solid ${cor_azulEscuro};
      padding-right: 1em;
    }
  }
`;
