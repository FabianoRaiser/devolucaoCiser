import { Botao, Input, Label } from "components/ui/UI";
import { StyledLogin } from "./styles";
import { useState } from "react";

export const LoginCard = () => {
  
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha] = useState('');
  
  const atualizaUsuario = (event) => {
    setUsuario(event.target.value);
    console.log(usuario);
  }

  const atualizaSenha = (event) => {
    setSenha(event.target.value);
    console.log(senha);
  }

  const logar = () => {
    console.log("tentou logar");
    
    switch (usuario) {
      case 'devolucao':
        if
        break;
    
      default:
        break;
    }
    // window.location.replace("/home")
  }


  return (
    <StyledLogin>
      <h2>Login</h2>
      <Label>Nome</Label>
      <Input type="text" onChange={atualizaUsuario}/>
      <Label>Senha</Label>
      <Input type="password" />
      <Botao onClick={logar}>Logar</Botao>
    </StyledLogin>
  );
};
