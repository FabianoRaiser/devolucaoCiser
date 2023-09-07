import { cor_azulClaro } from "components/ui/variaveis";
import styled from "styled-components";

export const StyledCardMercadoria = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    border-radius: 0.5rem;
    border: 1px solid ${cor_azulClaro};

    padding: 1rem;
`

export const LinhaCard = styled.div`
    display: flex;
    width: 100%;

    justify-content: space-between;
    
    & :nth-child(1) {
        font-weight: 500;
        color: ${cor_azulClaro};
    }

`

export const LinhaExtra = styled.div`
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;
`