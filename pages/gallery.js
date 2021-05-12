import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Cosmic from 'cosmicjs';
import styles from '../styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/StyledComponents/PageTitle';
import NavigationBar from '../components/NavigationBar/';
import Footer from '../components/Footer';
import { MainContainer } from '../components/StyledComponents/Containers';




// artWork.metafields[4].value[0]

function Gallery () {
    const [artWorks, setArtWorks] = useState("");
    
   


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
            limit: 20
        })
        .then(data => {
            
            setArtWorks(data.objects);
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
                <MainContainer>
                    <PageTitle>Galleri</PageTitle>
                    <GalleryGrid>
                        {artWorks.map(artWork => {
                            const image = artWork.metafields.find(metafield => metafield.key === 'main_image')
                            const height = artWork.metafields.find(metafield => metafield.key === 'height')
                            const width = artWork.metafields.find(metafield => metafield.key === 'width')
                            
                        
                            return (
                                <Card key={artWork.slug}>
                                    <img 
                                        src={image.imgix_url} 
                                        width="200"
                                    />
                                    <h6>{artWork.title}</h6>
                                    <p>{height.value}cm x {width.value}cm</p>
                                    <Button>
                                        <p>Se mer</p>
                                        <FontAwesomeIcon 
                                            icon={faLongArrowAltRight}
                                        />
                                    </Button>
                                </Card>
                            )
                        })}
                    </GalleryGrid> 
                    
                </MainContainer>
                <Footer/>
            </>
        )
    }

    return(
        <>
            {(artWorks.length === 0) ? renderSkeleton() : renderPage()}
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
    }

`;


const Card = styled.article`
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

const Button = styled.button`
    display: flex;
    justify-content: left;
    align-items: center;
    border: none;
    background-color: white;
    text-align: left;

    p{
        font-size: 0.9rem;
        padding-right: 0.5em;
    }

`;

const CheckboxSection = styled.section`
    display: flex;
    justify-content: center;
    margin: 1.2em;
    padding: 0.5em;
    font-size: 0.8rem;
    
    div{
        display: flex;
        padding-left: 1.2em;
        span{
            padding-left: 0.2em;
        }
    }
`;

const Input = styled.input`
    
`;


{/* <ul>
    {artWorks.map(item => {
        const image = item.metafields.find(metafield => metafield.key === 'main_image')
        return(
            <li key={item.slug}>
                {item.title}
                <img src={image.imgix_url} width="200"/>
                
            </li>
        )
    })}
</ul> */}