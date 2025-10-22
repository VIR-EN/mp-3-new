// styled/Header.ts
import styled from "styled-components";

export const Header = styled.header`
  text-align: left;
  padding: calc(2vh + 1vw);
  background-color: #003366;
  color: #ffffff;
  border-radius: calc(5px + 0.5vh);

  h1 {
    font-size: calc(10px + 2vh);
  }

  p {
    font-size: calc(10px + 1vh);
    margin-top: calc(1vh);
    color: #e0e0e0;
  }

  @media (max-width: 760px) {
    text-align: center;

  }
`;
