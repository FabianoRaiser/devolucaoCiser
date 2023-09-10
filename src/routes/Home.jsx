import { Container } from "components/ui/UI";

export const Home = () => {
  return (
    <main>
      <Container>
        <h2>Devoluções</h2>
        <p>Materiais a chegar</p>
        <p>Materiais Recebidos</p>
        <p>Materiais Conferidos</p>
        <p>Materiais Aguardando Faturamento</p>
      </Container>
      <Container>
        <h2>Transportes</h2>
        <p>Atendimentos a espera de autorização</p>
        <p>Atendimentos Autorizados</p>
        <p>Atendimentos Atrasados</p>
        <p>Atendimentos Recebidos</p>
      </Container>
    </main>
  );
};
