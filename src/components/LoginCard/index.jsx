import { Botao, Input, Label, SpanError } from "components/ui/UI";
import { StyledLogin } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginCard = () => {
  const [usuario, setUsuario] = useState("");
  const [usuarioInvalido, setUsuarioInvalido] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaInvalida, setSenhaInvalida] = useState("");

  const navigate = useNavigate();

  const atualizaUsuario = (event) => {
    setUsuario(event.target.value);
    console.log(usuario);
  };

  const atualizaSenha = (event) => {
    setSenha(event.target.value);
    console.log(senha);
  };

  const logar = () => {
    console.log("tentou logar");
    setUsuarioInvalido(false);
    setSenhaInvalida(false);

    // Trocar 'usuario' e 'senha' pelo setor em que o funcionario está alocado
    switch (usuario) {
      case "devolucao":
        if (senha == "devolucao") {
          navigate("/home/devolucao");
        } else {
          setSenhaInvalida(true);
        }
        break;
      case "transportes":
        if (senha === "transportes") {
          navigate("/home/transportes");
        } else {
          setSenhaInvalida(true);
        }
        break;

      default:
        setUsuarioInvalido(true);
        break;
    }
    // window.location.replace("/home")
  };

  const EnterLogin = (event) => {
    if (event.key === "Enter") {
      logar();
    }
  };

  return (
    <StyledLogin>
      <Label>Nome</Label>
      <Input type="text" onChange={atualizaUsuario} onKeyDown={EnterLogin} />
      {usuarioInvalido ? <SpanError>Usuario não cadastrado.</SpanError> : ""}
      <Label>Senha</Label>
      <Input type="password" onChange={atualizaSenha} onKeyDown={EnterLogin} />
      {senhaInvalida ? (
        <SpanError>Senha Incorreta. Tente novamente.</SpanError>
      ) : (
        ""
      )}
      <Botao onClick={logar}>Logar</Botao>
    </StyledLogin>
  );
};
