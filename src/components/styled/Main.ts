// styled/Main.ts
import styled from "styled-components";

export const Main = styled.main`
    width: 75%;
    background-color: #ffffff;
    padding: calc(5px + 1vw);
    border-radius: calc(0.5vh);
    text-align: center;
    margin: 0 auto;
    

    
    p {
     font-size: calc(1vw + 0.5vh);
     line-height: 1.5;
     color: #333333;
     }
    
    

    img {
        display: block;
        max-width: 100%;
        margin: 0 auto calc(1vh);
        border: 2px solid #cccccc;
        border-radius: calc(1vh);
        }

    .experience {
        text-align: left;

        section {
            margin-bottom: 3vh;                      
            padding-bottom: 1vh;
            border-bottom: 2px solid #ccc;          
        }
        
        

    @media (max-width: 760px) {
        width: 90%;  
        margin: 0 auto;
        height: 100%;
    }
  }
`;