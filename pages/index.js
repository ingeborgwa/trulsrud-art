import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import PageTitle from '../components/StyledComponents/PageTitle';
import { MainContainer, Column, Grid, TwoColumnsGrid } from '../components/StyledComponents/Containers';


import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Questions from '../components/Questions';


export default function Home() {
  return (
    <>
      <Head>
        <title>Trulsrud art</title>
        <meta name="description" content="Thea Trulsurd kunst" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavigationBar />
        <MainContainer>
          <LandingPage>
            <ImageAndTitleBox>
              <PageTitle style={{textAlign:"left"}}>trulsrud</PageTitle>
              <ImageStyle>
                <Image 
                    src="/landingpage.png"
                    alt="Bildet malt i grønt med alkohol ink."
                    width={400}
                    height={400}
                  />
              </ImageStyle>
              <PageTitle style={{textAlign:"right"}}>art</PageTitle>
            </ImageAndTitleBox>
          </LandingPage>

          <TwoColumnsGrid>
            <Column>
              <PageTitle>Min kunst</PageTitle>
              <p>
                  Her kommer litt kort intro om min kunst og hva jeg kan lage til deg. 
                  <Link href="/gallery"> Les mer her</Link>
              </p>
            </Column>
            <Grid>
              <Image 
                src="/landingpage.png"
                alt="Bildet malt i grønt med alkohol ink."
                width={200}
                height={200}

              />
              <Image 
                src="/landingpage.png"
                alt="Bildet malt i grønt med alkohol ink."
                width={200}
                height={200}
              />
              <Image 
                src="/landingpage.png"
                alt="Bildet malt i grønt med alkohol ink."
                width={200}
                height={200}
              />
              <Image 
                src="/landingpage.png"
                alt="Bildet malt i grønt med alkohol ink."
                width={200}
                height={200}
              />
              
            </Grid>
          </TwoColumnsGrid>
          
          <Questions/>
          
        </MainContainer>

        <Footer />
        
    </> 
  )
};



//--------- STYLE --------- //

// const MainContainer = styled.main `
//   padding: 2rem 0;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;


const LandingPage = styled.div`
  /* background-image: url("/canvas-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute; */
  height: 100vh;
  margin: auto;

`;

const ImageAndTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
 

`;

const ImageStyle = styled.div`
  display: flex;
  justify-content: center; 
  padding: 0.5em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
`;

// const Container = styled.section`
//   min-height: 100vh;
//   padding: 0 0.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;

// `;


// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: left;

// `;


// const Grid = styled.div`
//   display: grid;
//   box-sizing: border-box;
//   grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
//   grid-gap: 20px;
   
//   @media (max-width: 1000px) {
//     grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
//   } 
// `;


// const WorkSection = styled.article`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   padding: 1.2em;
  
// `;