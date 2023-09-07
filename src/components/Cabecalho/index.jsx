import { BuscaTrasacao } from "./BuscaTransacao"
import { Logo } from "./Logo"
import { StyledCabecalho } from "./styles"
import { Nav } from "./Nav"

export const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <BuscaTrasacao />
      <Logo />
      <Nav />
    </StyledCabecalho>
  )
}
