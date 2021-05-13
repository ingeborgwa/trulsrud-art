import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';

import styles from '../styles/Home.module.css'

import NavigationBar from '../components/NavigationBar/';
import BackButton from '../components/StyledComponents/Buttons/BackButton';
import { MainContainer } from '../components/StyledComponents/Containers';

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
            props:'slug,title,content'
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
                    <BackButton/>
                    <h1>{pageData.title}</h1>
                    <AboutContainer dangerouslySetInnerHTML={{__html:pageData.content}} />
                </MainContainer >
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
    width: 0%; 
    padding: 0 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;