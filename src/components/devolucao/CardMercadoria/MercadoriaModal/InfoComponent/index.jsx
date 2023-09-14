import { Label } from "components/ui/UI";
import { InfoVariavel } from "./styles";

// eslint-disable-next-line react/prop-types
export const InfoComponent = ({ label, info }) => {
  return (
    <>
      <Label>{label}</Label>
      <InfoVariavel>{info}</InfoVariavel>
    </>
  );
};
