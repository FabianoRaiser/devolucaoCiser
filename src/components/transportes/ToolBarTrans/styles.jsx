import { cor_azulClaro } from "components/ui/variaveis";
import styled from "styled-components";

export const ToolLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

 li {
   &::before {
    content: ">";
    margin-right: 0.5rem;
   } 

   &:hover {
    color: ${cor_azulClaro};
    text-decoration: underline;
   }
 }
`
