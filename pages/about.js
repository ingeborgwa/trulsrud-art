import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Cosmic from 'cosmicjs';
import styled from 'styled-components';

import styles from '../styles/Home.module.css'

import NavigationBar from '../components/NavigationBar/';
import Footer from '../components/Footer';
import BackButton from '../components/StyledComponents/Buttons/BackButton';
import PageTitle from '../components/StyledComponents/PageTitle';
import { MainContainer, TwoColumnsGrid } from '../components/StyledComponents/Containers';

function About  () {
    const [aboutData, setAboutData] = useState(null);
    

     //------- setter opp Cosmic JS -------//
    useEffect(() => {

        const client = new Cosmic();
        const bucket = client.bucket({
            slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,      
            read_key: process.env.NEXT_PUBLIC_READ_KEY  
        });
        
        bucket.getObject({
            id: '6090006fe3097e00083bf931',
            props: 'slug,title, metafields',
            
        })
        .then(data => {
            setAboutData(data.object);
            console.log(data.object.metafields)
            
        })
        .catch(error => {
            console.log(error)
        })
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
                <PageTitle>Møt kunstneren</PageTitle>
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
                    <p style={{paddingTop:'2em'}}>
                        Jeg inspireres av skjønnheten i naturen og møtene med menneskene rundt meg og i arbeidet som intensivsykepleier. Det er spesielt de skjøre og fine øyeblikkene i livet som gir varme helt inn til hjerteroten og setter ekstra preg på den kreative drivkraften. Dette kommer gjerne til uttrykk med sterke kontraster og forgylte detaljer i bildene mine. Variasjonen i maleriene er preget av at jeg liker å bli utfordret og inspireres ofte til å prøve noe nytt, noe som gjør at kunstprosjektene er i stadig endring.
                    </p>
                    <p style={{paddingBottom:'2em'}}>
                        For tiden jobber jeg mest med alkoholblekk (alcohol ink) i kombinasjon med forskjellige type penner, gulldekor og resin på metall-/keramikkflater eller på syntetisk papir. Uttrykket er vanligvis mer abstrakt eller semiabstrakt med denne malingstypen. Alcohol ink er et relativt nytt malemedium i Norge, som krever mye konsentrasjon og kunnskap hos utøveren. Det blir sett på som en strong minded malingsform, hvor det å kontrollere malingen er utfordrende, men vil samtidig før til at hvert bilde blir unikt i seg selv. I en arbeidsperiode pleier jeg gjerne å veksler mellom to-tre forskjellige kunstprosjekter som jeg holder på meg. Da er det ofte et landskapsbilde i akryl og et par abstrakte alcohol ink-bilder som kombineres. Og det er kanskje min lille hemmelighet for å holde kreativiteten pirret og drivkraften i gang.
                    </p>
                </MiddleSection>
                <LastSection>
                    <TextBox>
                        <p>
                            Jeg er selvlært innen alcohol ink-maling og brukt youtube og studert andre kunstneres teknikk og metode for å utvikle meg. Ofte bruker jeg erfaringer og kunnskap fra tidligere kurs innen akryl, olje og akvarellmaling som basisgrunnlag for all maling jeg holder på med. Kunstnere jeg har blitt inspirerert av og gått på kurs hos er blant annet Enver Gashi, Igor Mayer, Aud Rye og Anna Ivanova.
                        </p>
                    </TextBox>
                    
                </LastSection>
            </MainContainer >
            <Footer/>
        </>
    )
}

    return(
        <>
            {(aboutData === null) ? renderSkeleton() : renderPage()}
        </>
    );


}

export default About;



const ImageContainerTop = styled.div`
    background: url("/thea.jpg") no-repeat center;
    background-size: cover;
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
        color: #717e79;
        text-transform: uppercase;
    }

    p{
        line-height: 1.5;
    }

`;

const MiddleSection = styled.section`
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #717e79;
    /* background-color: #627187; */
    /* background-color: #58667b; */
    justify-content: center;
    align-items: center;

    p{
        margin: 3em;
        padding: 1em;
        width: 80%;
        color: white;
        line-height: 1.5;
    }

`;

const LastSection = styled.section`
    background: url("/fjellheim.jpg") no-repeat right; 
    background-size: 50%;
    margin: 2em;
    width: 100%;
    height: 100%;
    padding: 5em;
    
`;

const TextBox = styled.article`
    background-color: white;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 1.5em;
    padding: 2em;
    width: 70%;
    box-sizing: border-box;
    border: 0.1px solid white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    text-align: center;
    line-height: 1.5;
`;

// const ImageContainerBottom = styled.div`
//     background-image: url("/havbris_fat.jpg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: left;
//     height: 500px;
// `;







