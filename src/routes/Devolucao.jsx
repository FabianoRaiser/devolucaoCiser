import { Fila } from "components/devolucao/Fila";
import mercadoriasData from "json/mercadorias.json";
import { StyledFilas } from "styles/StylesDevolucao";

export const Devolução = () => {
  console.log(mercadoriasData.mercadorias);
  const mercadoriaLista = mercadoriasData.mercadorias;

  return (
    <main>
      <h2>Devolução</h2>
      <StyledFilas>
        <Fila title="A receber" lista={mercadoriaLista} />
        <Fila title="A conferir" lista={mercadoriaLista} />
        <Fila title="Aguardando ADM" lista={mercadoriaLista} />
        <Fila title="Concluido" lista={mercadoriaLista} />
      </StyledFilas>
    </main>
  );
};
