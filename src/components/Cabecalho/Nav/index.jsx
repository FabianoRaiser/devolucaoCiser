import { MenuDesktop, MenuMobile, StyledNav } from "./styles";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { NavLista } from "./NavLista";

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledNav>
      <MenuMobile>
        <Hamburger toggled={isOpen} toggle={setOpen} direction="left" />
        {isOpen ? <NavLista /> : ""}
      </MenuMobile>
      <MenuDesktop>
        <NavLista />
      </MenuDesktop>
    </StyledNav>
  );
};
