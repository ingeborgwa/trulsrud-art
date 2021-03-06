import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';


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
        
        bucket.getObject({
            id: '609c27029a6f770008cb16f3',
            props: 'slug,title,content,metadata',
            
        })
        .then(data => {
            setPageData(data.object);
           
            
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
                    <PageTitle>Ta kontakt her</PageTitle>
                    <ContactForm/>
                    <Container style={{padding:"1em"}} dangerouslySetInnerHTML={{__html:pageData.content}} />
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



