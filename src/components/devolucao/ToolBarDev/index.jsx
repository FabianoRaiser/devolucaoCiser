import {  ToolBar, ToolLinkList } from "components/ui/UI";
import { NavLink } from "react-router-dom";

export const ToolBarDev = () => {
  return (
    <ToolBar>
      <h3>Ferramentas</h3>
      <ToolLinkList>
        <li>
          <NavLink to="" >A Chegar</NavLink>
        </li>
        <li>
          <NavLink to="" >Recebidos</NavLink>
        </li>
        <li>
          <NavLink to="" >Concluidos</NavLink>
        </li>
      </ToolLinkList>
    </ToolBar>
  );
};
