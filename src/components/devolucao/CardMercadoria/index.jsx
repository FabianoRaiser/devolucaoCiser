/* eslint-disable react/prop-types */

import { Botao } from "components/ui/UI";
import { MercadoriaModal } from "./MercadoriaModal";
import { LinhaCard, LinhaExtra, StyledCardMercadoria } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsis, faTriangleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";

export const CardMercadoria = ({ mercadoria }) => {
  console.log(mercadoria);
  const { atendimento, nf, nome_cliente, status } = mercadoria;

  return (
    <StyledCardMercadoria>
      <LinhaCard>
        <p>RRC: </p>
        <p>{atendimento}</p>
      </LinhaCard>
      <LinhaCard>
        <p>NFs: </p>
        <p>{nf}</p>
      </LinhaCard>
      <LinhaCard>
        <p>Nome: </p>
        <p>{nome_cliente}</p>
      </LinhaCard>
      <LinhaCard>
        <p>Status: </p>
        <p>{status}</p>
      </LinhaCard>
      <LinhaExtra>
        <Botao>
          <FontAwesomeIcon
            icon={faEllipsis}
            size="lg"
            style={{ color: "#ffffff" }}
          />
        </Botao>
        <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#ffc800",}} />
        <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",}} />
        <FontAwesomeIcon icon={faCheck} style={{color: "#00f531",}} />
      </LinhaExtra>
      <MercadoriaModal />
    </StyledCardMercadoria>
  );
};
