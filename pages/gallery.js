import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cosmic from 'cosmicjs';

import PageTitle from '../components/StyledComponents/PageTitle';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import { MainContainer } from '../components/StyledComponents/Containers';





const Gallery =() => {
    const [artWorks, setArtWorks] = useState("");
    const [displayedArt, setDisplayedArt] = useState();



    //------- setter opp Cosmic JS -------//

    useEffect(() => {

        
        const client = new Cosmic();
        const bucket = client.bucket({
            slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,      
            read_key: process.env.NEXT_PUBLIC_READ_KEY  
        });
        

        bucket.getObjects({
            slug: 'art-works',
            query: {
                type: 'art-works'
              },
            props: 'slug,title,metafields',
            
        })
        .then(data => {
            setArtWorks(data.objects);
            console.log(data)
            
        })
        .catch(error => {
            console.log(error)
        })
    }, []);


   

    function renderArtWorks(type) {
        if (!type) {
            return <p>Laster siden..</p>;
          } else {
            return type.map((artWork) => {
              const image = artWork.metafields.find(
                (metafield) => metafield.key === "main_image"
              );
              const height = artWork.metafields.find(
                (metafield) => metafield.key === "height"
              );
              const width = artWork.metafields.find(
                (metafield) => metafield.key === "width"
              );
              
              return (
                <Card key={artWork.slug}>
                    <img src={image.imgix_url} width="200"/>
                    <div>
                        <h6>{artWork.title}</h6>
                        <p>{height.value} cm x {width.value} cm</p>
                    </div>
                </Card>
              );
            });
        }
        
    }

    function filterArts(e) {
        setDisplayedArt("");
        setDisplayedArt(
            artWorks.filter((el) => el.metafields[4].value[0] === e.target.innerHTML)
        );
    }
   

    return(
        <>
            <NavigationBar/>
            <MainContainer>
                <PageTitle>Galleri</PageTitle>
                <OptionsContainer>
                    <OptionsButton onClick={(e) => filterArts(e)}>Digital kunst</OptionsButton>
                    <OptionsButton onClick={(e) => filterArts(e)}>Akvarell</OptionsButton>
                    <OptionsButton onClick={(e) => filterArts(e)}>Alcohol Ink</OptionsButton>
                    <OptionsButton onClick={(e) => filterArts(e)}>Lerret</OptionsButton>

                </OptionsContainer >
                <GalleryGrid>
                {displayedArt ? renderArtWorks(displayedArt) : renderArtWorks(artWorks)}
                </GalleryGrid> 
            </MainContainer>
            <Footer/>
        </>
    );
}

export default Gallery;



//--------- STYLES ---------//


const GalleryGrid = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 90%;
    margin-top: 3rem;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        margin-right: 0.6em;
    }
`;


const Card = styled.article`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    text-decoration: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: 15em;
    height: 25em;
    box-sizing: border-box;

    h6{
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 400;
    }

    p{
        margin: 0;
        font-size: 0.8rem;
        line-height: 1.5;
    }

    img{
        border-radius: 10px;
    }
`;



const OptionsButton = styled.button`
    border: none;
    background-color: white;
    text-align: left;

    font-size: 1.2rem;
    padding: 0.8em;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }

    @media (max-width: 600px){
        display: flex;
        justify-content: center;
        font-size: 0.85rem;
        padding: 0.5em;
    }

`;

const OptionsContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 1.2em;
    padding: 0.5em;
    font-size: 0.8rem;  

    
`;




