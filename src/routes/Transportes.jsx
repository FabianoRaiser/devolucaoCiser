import { ToolBarTrans } from "components/transportes/ToolBarTrans";
import { Outlet } from "react-router-dom";
import { StyledTransportes } from "styles/StylesTransportes";

export const Transportes = () => {
  return (
    <StyledTransportes>
      <ToolBarTrans />
      <main>
        <Outlet />
      </main>
    </StyledTransportes>
  );
};
