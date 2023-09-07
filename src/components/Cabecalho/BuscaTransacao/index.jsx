import { StyledBuscaTrasacao } from "./styles"


export const BuscaTrasacao = () => {
    return (
        <StyledBuscaTrasacao>
            <input type="text" placeholder="Transação"/>
            <button type="button">Pesquisar</button>
        </StyledBuscaTrasacao>
    )
}