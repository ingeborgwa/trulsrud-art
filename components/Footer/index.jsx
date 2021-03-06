import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const Footer = () => {

    return(
        <FooterContainer>
            <LeftSection>
                <LinkItem><Link href="/about">Møt kunstneren</Link></LinkItem>
                <LinkItem><Link href="/contact">Kontakt</Link></LinkItem>
            </LeftSection>
            <MiddleSection>
                <LinkItem><Link href="/gallery">Galleri</Link></LinkItem>
                <LinkItem><Link href="/questions">Spørsmål & svar</Link></LinkItem>
            </MiddleSection>
            <RightSection>
                <LinkItem><a target="_blank" href="https://www.facebook.com/trulsrudart/">Facebook</a></LinkItem>
                <LinkItem><a target="_blank" href="https://www.instagram.com/trulsrud.art/">Instagram</a></LinkItem>
            </RightSection>
        </FooterContainer>
    )

};

export default Footer;

//------- Style -------//

const FooterContainer = styled.footer`
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    
    
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 60px; 

    @media (max-width: 600px){
        margin: 0;
    }
`;

const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 60px; 

    @media (max-width: 600px){
        margin: 0;
    }
`;

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 60px; 

    @media (max-width: 600px){
        margin: 0;
    }
`;



const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.8em;
    color: #222;
    font-weight: 500;
    font-size: 0.9rem;
    align-items: center;
    justify-content: left;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
        &:hover {
            color:#35473b;
            text-decoration: underline;
        }
`;