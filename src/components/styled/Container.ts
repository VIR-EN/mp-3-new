// styled/Container.ts
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: calc(2vw);
    margin-top: calc(2vh);
    height: 250vh;
    
    
    @media (max-width: 760px) {
        flex-direction: column;
        justify-content: left;
        
        
  }
`;