import { cor_azulClaro } from "components/ui/variaveis";
import styled from "styled-components";

export const StyledFila = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5em;
  
  h3 {
    font-weight: 700;
    border-bottom: 2px solid ${cor_azulClaro};
    text-align: center;
  }
`;
