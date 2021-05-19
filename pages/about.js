import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';
import { DeviceSizes } from '../components/responsive';
import NavigationBar from '../components/NavigationBar/';
import Footer from '../components/Footer';
import PageTitle from '../components/StyledComponents/PageTitle';
import { MainContainer } from '../components/StyledComponents/Containers';

function About () {
    const [aboutData, setAboutData] = useState(null);
    const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile});
    

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
            
        })
        .catch(error => {
            console.log(error)
        })
    }, []);


    function renderSkeleton() {
        return (
            <p>Laster siden..</p>
        );
    }


    
function renderPage() {
    return (
        <>
            <NavigationBar/>
            <MainContainer >
                <PageTitle>Møt kunstneren</PageTitle>
                {!isMobile && 
                    <div>
                        <FirstSection>
                            <ImageContainer alt="Bilde av Thea som maler"/>
                            <article>
                                {aboutData && <h3>{aboutData.metafields[0].value}</h3>}
                                {aboutData && <h4>{aboutData.metafields[1].value}</h4>}
                                {aboutData && <p>{aboutData.metafields[2].value}</p>}
                            </article>
                        </FirstSection>
                        <MiddleSection>
                            {aboutData && <p style={{paddingTop:'2em'}}>{aboutData.metafields[3].value}</p>}
                            {aboutData && <p style={{paddingBottom:'2em'}}>{aboutData.metafields[4].value}</p>}
                        </MiddleSection>
                        <LastSection>
                            <TextBox>
                                {aboutData && <p>{aboutData.metafields[5].value}</p>}
                            </TextBox>
                        </LastSection>
                    </div>  
                }

                {isMobile && 
                    <div>
                        <MobileTextSection>
                            {aboutData && <h3>{aboutData.metafields[0].value}</h3>}
                            {aboutData && <h4>{aboutData.metafields[1].value}</h4>}
                            {aboutData && <p>{aboutData.metafields[2].value}</p>}
                            <ImageContainer alt="Bilde av Thea som maler"/>
                        </MobileTextSection>
                        <MobileTextSection style={{backgroundColor:"#717e79", color:"white"}}>
                            {aboutData && <p style={{paddingTop:'1em'}}>{aboutData.metafields[3].value}</p>}
                            {aboutData && <p style={{paddingBottom:'1em'}}>{aboutData.metafields[4].value}</p>}
                        </MobileTextSection>
                        <MobileTextSection>
                            {aboutData && <p>{aboutData.metafields[5].value}</p>}
                        </MobileTextSection>
                    </div>
                } 
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



const ImageContainer = styled.div`
    background: url("/thea.jpg") no-repeat center;
    background-size: cover;
    height: 20em;
    border-radius: 5px;
    margin: 1em;
    
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

const MobileTextSection = styled.section`
    margin: auto;
    padding: 2em;

    h3{
        text-transform: uppercase;
    }

    h4{
        color: #717e79;
        text-transform: uppercase;
    }

    p{
        font-size: 0.85rem;
        line-height: 1.5;
    }
`;