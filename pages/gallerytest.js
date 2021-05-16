import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Cosmic from 'cosmicjs';
import styles from '../styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight  } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/StyledComponents/PageTitle';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import { MainContainer } from '../components/StyledComponents/Containers';

import { Modal, ModalBody } from "reactstrap";





const GalleryTest =() =>{
    const [artWorks, setArtWorks] = useState("");
    const [displayedArt, setDisplayedArt] = useState();
    const [modalOpen, setModalOpen] = useState(false);


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
            return <p>Loading...</p>;
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
              const mockUp = artWork.metafields.find(
                (metafield) => metafield.key === "mockup"
              );
              
              return (
                <Card key={artWork.slug}>
                    <img src={image.imgix_url} width="200" />
                    <h6>{artWork.title}</h6>
                    <Button
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                    <p>Se mer</p>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Button>
                    <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{artWork.title}</h5>
                            <button
                                aria-label="Close"
                                className=" close"
                                type="button"
                                onClick={() => setModalOpen(!modalOpen)}
                            >
                                <span aria-hidden={true}>Lukk</span>
                            </button>
                        </div>
                        <ModalBody>
                            <img src={mockUp.imgix_url} width="200" />
                            <p>Størrelse: {height.value}cm x {width.value}cm</p>
                            {/* <p>Her kommer det litt info om bildet</p> */}

                        </ModalBody>
                    </Modal>
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
                <PageTitle >Galleri</PageTitle>
                <OptionsContainer>
                    <h2 onClick={(e) => filterArts(e)}>Digital kunst</h2>
                    <h2 onClick={(e) => filterArts(e)}>Akvarell</h2>
                    <h2 onClick={(e) => filterArts(e)}>Alcohol Ink</h2>
                    <h2 onClick={(e) => filterArts(e)}>Lerret</h2>
                </OptionsContainer >
                <GalleryGrid>
                {displayedArt ? renderArtWorks(displayedArt) : renderArtWorks(artWorks)}
                </GalleryGrid> 
            </MainContainer>
            <Footer/>
        </>
    );
}

export default GalleryTest;



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

const OptionsContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 1.2em;
    padding: 0.5em;
    font-size: 0.8rem;
    
    h2{
        padding: 0.8em;
        font-weight: 400;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
`;




