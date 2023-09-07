/* eslint-disable react/prop-types */
import { CardMercadoria } from "../CardMercadoria";
import { StyledFila } from "./styles";

export const Fila = ({ title, lista }) => {

    console.log(lista);
  return (
    <StyledFila>
      <h3>{title}</h3> 
        {lista.map((mercadoria) => {
            return (<CardMercadoria key={mercadoria.id} mercadoria={mercadoria} />)
        })}
    </StyledFila>
  );
};
