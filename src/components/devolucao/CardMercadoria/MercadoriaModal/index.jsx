/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { CabecalhoModal, StyledModalMercadoria } from "./styles";
import { Botao, Input } from "components/ui/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTriangleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/display-name
export const MercadoriaModal = forwardRef(({ mercadoria, fechaModal }, ref) => {

  const {atendimento, nf, nome_cliente, transportadora, dia_autorizado, dia_chagada, status} = mercadoria;

  return <StyledModalMercadoria ref={ref}>
      <CabecalhoModal>
        <h2>RRC {atendimento}</h2>
      <FontAwesomeIcon
          icon={faTriangleExclamation}
          style={{ color: "#ffc800" }}
        />
        <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
        <FontAwesomeIcon icon={faCheck} style={{ color: "#00f531" }} />
        <Botao onClick={fechaModal}>
        <FontAwesomeIcon icon={faXmark} />
        </Botao>
      </CabecalhoModal>
      <p>NF:</p><span>{nf}</span>
      <p>Nome:</p><span>{nome_cliente}</span>
      <p>Transportadora:</p><span>{transportadora}</span>
      <p>Dia Autorizado:</p>
      <Input type="date"/>
      <p>Data Prevista Chegada:</p>
      <Input type="date" />
      <p>Dia Chegada:</p>
      <Input type="date" />
      <p>Status:</p><span>{status}</span>
    </StyledModalMercadoria>;
});
