import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';
import { DeviceSizes } from '../components/responsive';

import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import PageTitle from '../components/StyledComponents/PageTitle';
import { MainContainer, Container } from '../components/StyledComponents/Containers';


function Bestillingsverk () {
    const [pageData, setPageData] = useState(null);


    //------- setter opp Cosmic JS -------//

    useEffect(() => {

        const client = new Cosmic();
        const bucket = client.bucket({
            slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,      
            read_key: process.env.NEXT_PUBLIC_READ_KEY  
        });
        
        bucket.getObject({
            id: '60a524e7c286010007fb9df2',
            props: 'slug,title,content,metafields',
            
        })
        .then(data => {
            setPageData(data.object);
            console.log(data.object.metafields)
            
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

    function renderPage(){
        return(
            <>
                <NavigationBar/>
                <MainContainer>
                    <PageTitle>Bestillingsverk</PageTitle>
                    <TextSection dangerouslySetInnerHTML={{__html:pageData.content}}/> 
                </MainContainer>
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

export default Bestillingsverk;

const TextSection = styled.section`
    padding: 2em;
    line-height: 1.5;
    width: 70%;

    @media (max-width: 600px){
        width: 100%;
    }
`;