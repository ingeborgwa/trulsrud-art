import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


import PageTitle from '../components/StyledComponents/PageTitle';
import { useMediaQuery } from 'react-responsive';
import { DeviceSizes } from '../components/responsive';
import { MainContainer, Column, Grid, TwoColumnsGrid, Container } from '../components/StyledComponents/Containers';


import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import ToGalleryButton from '../components/StyledComponents/Buttons/ToGalleryButton';
import Questions from '../components/Questions';


export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSizes.tablet});

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

          {/* {!isMobile && <ImageSection/>} */}
          
          

          <div>
            {!isMobile &&  
              <TwoColumnsGrid>
                <Column>
                  <PageTitle>Min kunst</PageTitle>
                  <p>
                    Lyst på noe unikt på veggen din?
                  </p>
                  <p>
                    Jeg tar også opp bestillinger på originale kunstverk. Bildet vil være unikt i sin karakter og tilpasset dine ønsker om størrelse, farger og kunstuttrykk. Se gjerne gjennom galleriet og tidligere solgte verker eller via
                      <Link 
                        href="https://www.instagram.com/trulsrud.art/" 
                        target="_blank"> Instagram
                      </Link> 
                    for inspirasjon til ditt kommende bilde.
                  </p>
                  <p>
                    Ta gjerne kontakt via email, så hjelper jeg deg med å finne ut av hva som passer for deg. Det er også mulig å møtes personlig for en uforpliktende samtale.
                  </p>
                  <Link href="/gallery"><ToGallery>Les mer her</ToGallery></Link>
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
            }
            {isMobile && 
              <section>
                <PageTitle>Min kunst</PageTitle>
                <MobilSection>
                  <article>
                    <p>
                      Lyst på noe unikt på veggen din?
                    </p>
                    <p>
                      Jeg tar også opp bestillinger på originale kunstverk. Bildet vil være unikt i sin karakter og tilpasset dine ønsker om størrelse, farger og kunstuttrykk. Se gjerne gjennom galleriet og tidligere solgte verker eller via
                      <Link 
                        href="https://www.instagram.com/trulsrud.art/" 
                        target="_blank"> Instagram 
                      </Link> 
                      for inspirasjon til ditt kommende bilde.
                    </p>
                    <p>
                      Ta gjerne kontakt via email, så hjelper jeg deg med å finne ut av hva som passer for deg. Det er også mulig å møtes personlig for en uforpliktende samtale.
                    </p>
                    <Link href="/gallery"><ToGallery>Les mer her</ToGallery></Link>
                  </article>
                  <ImageContainer
                      src="/Mockup_blackheartfilledwithpeonies.jpg"
                      alt="Bilde i svart av peonger, malt med alcohol ink, i ramme."
                  />
                </MobilSection>
              </section>
            }
          </div>
         
          <Questions/>
        </MainContainer>
        <Footer/>
       
        
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
  padding-top: 2em;
`;

const ImageAndTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;

  @media (max-width: 600px){
    margin: 0.7em;
  }

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

  @media (max-width: 600px){
    width: 100%; 
    height: auto;
    padding: 1em;
  }
`;

const ImageSection = styled.section`
  background: url("/Gallhøpiggen_postkort.jpg") no-repeat top; 
  background-size: cover;
  margin: 2em;
  width: 100vw;
  height: 30em;
  padding: 5em;
`;

const MobilSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2em;
  width: 90%;
  margin: auto;

  p{
    font-size: 0.85rem;
    cursor: pointer;
  }

  a{
    text-decoration: underline;
    padding-right: 0.2em;
  }

  
`;


const ToGallery = styled.button`
  background-color: white;
  border: none;
  padding: 0.5em;
  text-decoration:underline;
  cursor: pointer;

`;