import { InfoLabel, InfoVariavel } from "./styles";

// eslint-disable-next-line react/prop-types
export const InfoComponent = ({ label, info }) => {
  return (
    <>
      <InfoLabel>{label}</InfoLabel>
      <InfoVariavel>{info}</InfoVariavel>
    </>
  );
};
