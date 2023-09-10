import { cor_azulEscuro } from "components/ui/variaveis";
import styled from "styled-components";

export const StyledModalMercadoria = styled.dialog`
    min-width: 50%;

    p {
        color: ${cor_azulEscuro};
        font-weight: 500;
    }
`

export const CabecalhoModal = styled.div`
    display: flex;
    justify-content: space-between;

    h2 {
        color: ${cor_azulEscuro};
        font-weight: 700;
        font-size: 1.5rem;
    }
`