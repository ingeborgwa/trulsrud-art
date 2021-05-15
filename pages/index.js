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
              <MainImageStyle>
                <Image 
                    src="/landingpage.png"
                    alt="Bildet malt i grønt med alkohol ink."
                    width={400}
                    height={400}
                  />
              </MainImageStyle>
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
              <ImageContainer
                src="/Mockup_blackheartfilledwithpeonies.jpg"
                alt="Bilde i svart av peonger, malt med alcohol ink, i ramme."
              />
              <ImageContainer
                src="/Mockup_medblomsterihjertet.jpg"
                alt="Rosa og lille blomster med hjerte, malt med alcohol ink, i ramme"
              />
              <ImageContainer
                src="/Mockup_gullhval.jpg"
                alt="Gull hval på svart bakgrunn, i ramme"
              />
              <ImageContainer
                src="/Mockup_morgengry_skybrudd.jpg"
                alt="To malerier av himmel på vegg over sofa"
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

const MainImageStyle = styled.div`
  display: flex;
  justify-content: center; 
  padding: 0.5em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ImageContainer = styled.img`
  background: cover center no-repeat;
  height: 20em;
  width: 20em;
  padding: 2em;
`;

