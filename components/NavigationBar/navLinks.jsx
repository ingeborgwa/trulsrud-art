import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';



export function NavLinks(){
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem><Links href="/about">Om kunstneren</Links></LinkItem>
                <LinkItem><Links href="/contact">Kontakt</Links></LinkItem>
                <LinkItem><Links href="/gallery">Galleri</Links></LinkItem>
                <LinkItem><Links href="/questions">Spørsmål & svar</Links></LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    )
};


//STYLE

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
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
            border-top: 2px solid #35473b;
        }
`;

const Links = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    &:hover{
        color: #222;
    }
`;


//darkgreen: #35473b;
//pink: #b41397;
//darkblue:#05114b;