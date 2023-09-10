import { cor_azulEscuro } from "components/ui/variaveis";
import styled from "styled-components";

export const StyledNavLista = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 100%;
  right: 0;

  padding: 1em;

  background-color: ${cor_azulEscuro};

  li {
    padding: 1em;
    & :hover {
      text-decoration: underline;
      font-weight: 500;
    }

    a.active {
      font-weight: 700;
    }
  }
  > li:nth-last-child(n+2) {
    padding-bottom: 1.25rem;
    border-bottom: 1px solid white;
  }

  @media (min-width: 48rem) {
    flex-direction: row;
    position: inherit;

    background-color: inherit;
    padding: inherit;

    > li:nth-last-child(n+2) {
      border-bottom: none;
      padding-bottom: inherit;
    }
  }
`;
