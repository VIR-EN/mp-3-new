// styled/Calculator.ts
import styled from "styled-components";

export const Calculator = styled.div`
  margin: 2vh auto;
  width: 90%;
  background-color: #f0f0f0;
  padding: calc(2% + 1vh);
  border-radius: calc(0.5% + 0.5vh);

  h2 {
    text-align: center;
    margin-bottom: calc(1.5% + 1vh);
    font-size: calc(1.2vw + 1.2vh);
  }

  label {
    display: block;
    margin-bottom: calc(0.5% + 0.5vh);
    font-weight: bold;
    font-size: calc(1vw + 0.8vh);
  }

    .buttons {    /*it says unused, but I have tested the styling, it works on the rendered application, removing this messes up the styleing */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 2vh;
        column-gap: 2%;
        max-width: 90%;
        margin: 3vh auto 0;
    }

  button {
    width: 30%;
    height: 8vh;
    font-size: calc(1vw + 1vh);
    background-color: #004b8d;
    color: white;
    border: none;
    border-radius: 1vw;
    cursor: pointer;

    &:hover {
      background-color: #003366;
    }
  }

  h3#output { /*it says unused, but I have tested the styling, it works on the rendered application, removing this messes up the styleing */
    text-align: center;
    margin-top: calc(2% + 1vh);
    font-size: calc(1.1vw + 1.1vh);
  }

    h3.negative {   /*it says unused, but I have tested the styling, it works on the rendered application, removing this messes up the styling, */
        color: red;
    }
`;
