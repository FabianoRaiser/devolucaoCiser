import { cor_azulEscuro } from "components/ui/variaveis";
import styled from "styled-components";

export const StyledModalMercadoria = styled.dialog`
    min-width: 50%;
`

export const CabecalhoModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${cor_azulEscuro};
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;

    h2 {
        color: ${cor_azulEscuro};
        font-weight: 700;
        font-size: 1.5rem;
    }
`;

export const CorpoModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;