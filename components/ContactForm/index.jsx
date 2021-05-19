import React from 'react';
import styled from 'styled-components';


function ContactForm () {
    return(
        <FormBox>
            <ImageContainer alt="Anatomisk hjerte"/>
            <Form>
                <label htmlFor="name">Navn</label>
                <input
                    type="text"
                    placeholder="Navn"
                    id="name"
                    required
                />
            
                <label htmlFor="email">E-post</label>
                <input
                    type="email"
                    id="email"
                    placeholder="E-post"
                    required
                />
            
                <label htmlFor="message">Din forespørsel</label>
                <textarea
                    id="message"
                    rows="5" 
                    cols="30"
                    required
                />
                <SubmitButton type="submit">Send</SubmitButton>
            </Form>
        </FormBox>
    )
}


export default ContactForm;


//------- STYLE -------//

const FormBox = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1.5em;
    border-radius: 10px;
    box-sizing: border-box;
    border: 0.1px solid white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (max-width: 600px){
        width: 80%;
    }

`;

const ImageContainer = styled.div`
    background-image: url("/anatomisk_hjerte.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px 0 0 10px;
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 25em;
    height: 30em;
    margin: 1em;
    padding: 2em;
    
    label{
        padding: 1.7em 1em 1em 0;
    }

    textarea{
        border: 1px solid black;
        border-radius: 5px;
        font-family:'Open Sans', sans-serif;
    }

    input{
        border: none;
        border-bottom: 1px solid black;
    }

    @media (max-width: 600px){
        width: 70%;
    }

`;


const SubmitButton = styled.button`
    background-color: #05114b;
    color: white;
    margin-top: 6em;
    padding: 0.8em;
    width: 8em;
    border: none;
    border-radius: 30px;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover{
        transform: scale(1.1);
    }
`;