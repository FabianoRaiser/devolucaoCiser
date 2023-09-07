import { NavLink } from "react-router-dom";
import { StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/devolucao">Devolução</NavLink>
        </li>
        <li>
          <NavLink to="/transportes">Transportes</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};
