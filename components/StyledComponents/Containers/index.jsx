import styled from 'styled-components';


export const MainContainer = styled.main `
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const Container = styled.section`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

`;


export const Grid = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
  } 
`;

export const TwoColumnsGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.2em;
  
`;