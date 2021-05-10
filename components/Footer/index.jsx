import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const Footer = () => {

    return(
        <FooterContainer>
            <LeftSection>
                <LinkItem><Link href="/about">Om Thea Trulsrud</Link></LinkItem>
                <LinkItem><Link href="#">Kontakt</Link></LinkItem>
            </LeftSection>
            <MiddleSection>
                <LinkItem><Link href="/gallery">Galleri</Link></LinkItem>
                <LinkItem><Link href="#">Spørsmål & svar</Link></LinkItem>
            </MiddleSection>
            <RightSection>
                <LinkItem><Link href="/gallery">Facebook</Link></LinkItem>
                <LinkItem><Link href="/gallery">Instagram</Link></LinkItem>
            </RightSection>
        </FooterContainer>
        

    )

};

export default Footer;

//Style

const FooterContainer = styled.footer`
    width: 100%;
    height: 100px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;

`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 60px;
`;

const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    text-align: left;
    margin-left: 60px;
`;

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 60px;
`;



const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
        &:hover {
            color:#2ecc71;
        }
`;





