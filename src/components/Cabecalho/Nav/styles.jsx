import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;

    li {
      padding: 0 1em;
      & :hover {
        text-decoration: underline;
        font-weight: 500;
      }

      a.active {
        font-weight: 700;
      }
    }
  }
`;
