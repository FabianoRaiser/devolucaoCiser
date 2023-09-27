import { Botao, Input, Label } from "components/ui/UI";
import { StyledLogin } from "./styles";

export const LoginCard = () => {
  const logar = () => {
    console.log("Logou");
    window.location.replace("/inicio")
  }

  return (
    <StyledLogin>
      <h2>Login</h2>
      <Label>Nome</Label>
      <Input type="text" />
      <Label>Senha</Label>
      <Input type="password" />
      <Botao onClick={logar}>Logar</Botao>
    </StyledLogin>
  );
};
