import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';

import PageTitle from '../components/StyledComponents/PageTitle';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import { MainContainer, Container } from '../components/StyledComponents/Containers';
import ContactForm from '../components/ContactForm';

function ContactPage () {
    const [pageData, setPageData] = useState(null);


 //------- setter opp Cosmic JS -------//

    useEffect(() => {
            
        const client = new Cosmic();
        const bucket = client.bucket({
            slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,      
            read_key: process.env.NEXT_PUBLIC_READ_KEY  
        });
        
        const params = {
            slug:'contact',
            props:'slug,title,content'
        };
        
        bucket.getObjects({params})
            .then((data) => {
                setPageData(data.objects[3]);
                console.log(data.objects[3])
                
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

    function renderPage(){
        return(
            <>
                <NavigationBar/>
                <MainContainer>
                    <PageTitle>Ta kontakt her</PageTitle>
                    <ContactForm/>
                    <Container dangerouslySetInnerHTML={{__html:pageData.content}}/>
                </MainContainer>
                <Footer/>
            </>
        )
    }


    return (
        <>
            {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    )
}

export default ContactPage;



//------- STYLE -------//



