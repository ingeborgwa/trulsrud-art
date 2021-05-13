import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Cosmic from 'cosmicjs';
import styled from 'styled-components';

import styles from '../styles/Home.module.css'

import NavigationBar from '../components/NavigationBar/';
import Footer from '../components/Footer';
import BackButton from '../components/StyledComponents/Buttons/BackButton';
import { MainContainer, TwoColumnsGrid } from '../components/StyledComponents/Containers';

function About  () {
    const [pageData, setPageData] = useState(null);
    

     //------- setter opp Cosmic JS -------//
    useEffect(() => {

        const client = new Cosmic();
        const bucket = client.bucket({
            slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,      
            read_key: process.env.NEXT_PUBLIC_READ_KEY  
        });
        

        //slug til siden og hvilke props som skal med
        const params = {
            slug:'om-kunstneren',
            props:'slug,title,content,portrett'
        };


        //henter ut objekt og lagrer resultatet
        bucket.getObjects({params})
            .then((data) => {
                setPageData(data.objects[0]);
                
            })
            .catch ((error) => {
                console.log(error);
            });
    }, []);


    function renderSkeleton() {
        return (
            <p>Laster data..</p>
        );
    }


    function renderPage() {
       

        return (
            <>
                <NavigationBar/>
                <MainContainer >
                    <FirstSection>
                        <ImageContainerTop alt="Bilde av Thea som maler"/>
                        <article>
                            <h3>Hei, jeg er Thea</h3>
                            <h4>Håper du finner glede og inspirasjon i kunsten min.</h4>
                            <p>
                                Jeg heter Thea Helene Trulsrud, født i 1990 og er oppvokst på Bærums Verk. Jeg har nå bosatt meg i den lille sommerbyen Tønsberg, der jeg jobber som kunstner og intensivsykepleier. Min interesse for billedkunst startet i en alder av 16 år og kan nå si at det har blitt en del av min identitet og hverdag. 
                            </p>
                        </article>
                    </FirstSection>
                    <MiddleSection>
                        <p>
                            Jeg inspireres av skjønnheten i naturen og møtene med menneskene rundt meg og i arbeidet som intensivsykepleier. Det er spesielt de skjøre og fine øyeblikkene i livet som gir varme helt inn til hjerteroten og setter ekstra preg på den kreative drivkraften. Dette kommer gjerne til uttrykk med sterke kontraster og forgylte detaljer i bildene mine. Variasjonen i maleriene er preget av at jeg liker å bli utfordret og inspireres ofte til å prøve noe nytt, noe som gjør at kunstprosjektene er i stadig endring.
                        </p>
                        <p>
                            For tiden jobber jeg mest med alkoholblekk (alcohol ink) i kombinasjon med forskjellige type penner, gulldekor og resin på metall-/keramikkflater eller på syntetisk papir. Uttrykket er vanligvis mer abstrakt eller semiabstrakt med denne malingstypen. Alcohol ink er et relativt nytt malemedium i Norge, som krever mye konsentrasjon og kunnskap hos utøveren. Det blir sett på som en strong minded malingsform, hvor det å kontrollere malingen er utfordrende, men vil samtidig før til at hvert bilde blir unikt i seg selv. I en arbeidsperiode pleier jeg gjerne å veksler mellom to-tre forskjellige kunstprosjekter som jeg holder på meg. Da er det ofte et landskapsbilde i akryl og et par abstrakte alcohol ink-bilder som kombineres. Og det er kanskje min lille hemmelighet for å holde kreativiteten pirret og drivkraften i gang.
                        </p>
                    </MiddleSection>
                    <LastSection>
                        <TextBox>
                            <p>
                                Jeg er selvlært innen alcohol ink-maling og brukt youtube og studert andre kunstneres teknikk og metode for å utvikle meg. Ofte bruker jeg erfaringer og kunnskap fra tidligere kurs innen akryl, olje og akvarellmaling som basisgrunnlag for all maling jeg holder på med. Kunstnere jeg har blitt inspirerert av og gått på kurs hos er blant annet Enver Gashi, Igor Mayer, Aud Rye og Anna Ivanova.
                            </p>
                        </TextBox>
                        <ImageContainerBottom/>
                    </LastSection>
                </MainContainer >
                <Footer/>
            </>
        )
    }

    return(
        <>
            {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    );


}

export default About;

const AboutContainer = styled.section`
    margin: 5em;
    width: 70%; 
    padding: 0 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ImageContainerTop = styled.div`
    background-image: url("/thea.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 25em;
    border-radius: 5px;
    margin: 3em;
    
`;

const FirstSection = styled.section`
    height: 100vh;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5em;
    align-items: center;

    h3{
        text-transform: uppercase;
    }
    h4{
        /* color: #326a9b; */
        /* color: #dcad55; */
        color: #4a6f77;
        text-transform: uppercase;
    }

  
`;

const MiddleSection = styled.section`
    width:100%;
    height: 100%;
    
    text-align: center;
    
    
    background-color: #4a6f77;
    /* background-color: #627187; */
    /* background-color: #58667b; */
    display: flex;
    justify-content: center;

    p{
        padding: 4em 4em;
        width: 80%;
        color: white;
        line-height: 1.5;
    }

`;

const LastSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    height: 100%;
    padding: 5em;
    
`;

const TextBox = styled.article`
    height: 20em;
    margin: 1.5em;
    padding: 2em;
    width: 45em;
    box-sizing: border-box;
    border: 0.1px solid white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    text-align: center;
`;

const ImageContainerBottom = styled.div`
    background-image: url("/havbris_fat.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    height: 500px;
`;