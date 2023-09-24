import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Botao, ToolBar } from "components/ui/UI";
import { NavLink } from "react-router-dom";
import { ToolLinkList } from "./styles";

export const ToolBarTrans = () => {
  return (
    <ToolBar>
      <h3>Ferramentas</h3>
      <Botao>
        <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} /> Nova
        Autorização
      </Botao>
      <ToolLinkList>
        <li>
          <NavLink to="/transportes/autorizacoes" >Autorizações</NavLink>
        </li>
        <li>
          <NavLink to="/transportes/pendentes" >Pendentes</NavLink>
        </li>
        <li>
          <NavLink to="/transportes/atrasados" >Atrasados</NavLink>
        </li>
      </ToolLinkList>
    </ToolBar>
  );
};
