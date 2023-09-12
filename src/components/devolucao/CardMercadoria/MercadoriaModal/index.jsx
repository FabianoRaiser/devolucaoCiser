/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { CabecalhoModal, CorpoModal, StyledModalMercadoria } from "./styles";
import { Botao, Input } from "components/ui/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { SelectStatus } from "./SelectStatus";
import { InfoComponent } from "./InfoComponent";
import { DateComponent } from "./DateComponent";

// eslint-disable-next-line react/display-name
export const MercadoriaModal = forwardRef(({ mercadoria, fechaModal }, ref) => {
  const { atendimento, nf, nome_cliente, transportadora } = mercadoria;

  return (
    <StyledModalMercadoria ref={ref}>
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
      <CorpoModal>
        <InfoComponent label="NF:" info={nf} />
        <InfoComponent label="Nome:" info={nome_cliente} />
        <InfoComponent label="Transportadora:" info={transportadora}/>
        <DateComponent label="Data Autorizada"/>
        <p>Data Prevista Chegada:</p>
        <Input type="date" />
        <p>Dia Chegada:</p>
        <Input type="date" />
        <p>Status:</p>
        <SelectStatus />
      </CorpoModal>
    </StyledModalMercadoria>
  );
});
