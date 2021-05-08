import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterContainer>
            <h1>footer</h1>
            <Footer href="/about">Om kunstneren</Footer>
            <a href="#">Kontakt</a>
        </FooterContainer>
    )
};

export default Footer;

//STYLE

const FooterContainer = styled.section`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterLinks = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;
