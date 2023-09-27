import { LoginCard } from "components/LoginCard";
import { Container } from "components/ui/UI";
import { GlobalStyle } from "GlobalStyle";

export const Login = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <LoginCard />
      </Container>
    </>
  );
};
