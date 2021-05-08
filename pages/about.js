import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import styles from '../styles/Home.module.css'
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar/';
import BackButton from '../components/StyledComponents/Buttons/BackButton';

function About  () {
    const [pageData, setPageData] = useState(null);
    
    useEffect(() => {

        //setter opp Cosmic JS
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
                <main className={styles.main}>
                    <BackButton/>
                    <h1>{pageData.title}</h1>
                    <AboutContainer dangerouslySetInnerHTML={{__html:pageData.content}} />
                </main>
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
    padding: 0 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;