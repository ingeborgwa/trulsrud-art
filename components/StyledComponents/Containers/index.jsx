import styled from 'styled-components';


export const MainContainer = styled.main `
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Container = styled.section`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
 

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  a{
    text-decoration: underline;
    padding-right: 0.2em;
  }

`;


export const Grid = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
  } 
`;

export const TwoColumnsGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.2em;
  margin: 2em;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
  } 
  
`;


