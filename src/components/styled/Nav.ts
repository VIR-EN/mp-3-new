import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 25%;

  ul {
    list-style: none;
    padding-left: 0;
    width: 100%;
  }

  li {
  
    width: 100%;
      margin: 2%;
  }

  @media (max-width: 760px) {
    width: 100%;

    ul {
      display: flex;
      flex-direction: row;
      max-width: 80%;
      margin: auto;
      justify-content: center;
    }

    li {
      margin: 0.3vh 0.5vw;
      padding: 0.5vh 0.5vw;
    }
  }
`;


export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: calc(1vh + 0.5vw);
  background-color: #0055a5;
  color: #ffffff;
  text-decoration: none;
  border-radius: calc(0.5vh);
  border: calc(0.3vh) solid #003366;
  font-size: calc(0.8vw + 0.5vh);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077cc;
  }

  @media (max-width: 760px) {
    font-size: calc(1vw + 0.5vh);
    width: auto;
  }
`;
