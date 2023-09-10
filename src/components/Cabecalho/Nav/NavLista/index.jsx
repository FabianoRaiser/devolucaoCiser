import { NavLink } from "react-router-dom"
import { StyledNavLista } from "./styles"

export const NavLista = () => {
  return (
    <StyledNavLista>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/devolucao">Devolução</NavLink>
        </li>
        <li>
          <NavLink to="/transportes">Transportes</NavLink>
        </li>
      </StyledNavLista>
  )
}
