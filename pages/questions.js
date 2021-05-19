import React, { useState, useEffect  } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { MainContainer } from '../components/StyledComponents/Containers';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';


import Questions from '../components/Questions';


const QuestionsPage = () => {
    
    return (
        <>
            <NavigationBar/>
            <MainContainer>
                
                <QuestionsPageStyling>
                    <Questions />
                    <p style={{padding:"2em"}}>
                        Har du andre spørsmål, nøl ikke med å ta kontakt via mail eller <Link href="/contact">kontaktskjemaet</Link>. Du kan også ta kontakt via Instagram og Facebook.
                    </p>
                </QuestionsPageStyling>
            </MainContainer>
            <Footer/>
        </>
    )
};

export default QuestionsPage;


const QuestionsPageStyling = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 90%;
    

    p{
        width: 80%;
        font-size: 0.85rem;
    }
    
    a{
        text-decoration: underline;
        cursor: pointer;
    }

    @media (max-width: 600px){
        width: 100%;
    }
`;