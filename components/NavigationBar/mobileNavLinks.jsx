import React, { useState }from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { MenuToggle } from './menuToggle';



export function MobileNavLinks(props){
    const [isOpen, setOpen] = useState(false);

    return (
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <LinksWrapper>
                    <LinkItem><Link href="/about">Om kunstneren</Link></LinkItem>
                    <LinkItem><Link href="/contact">Kontakt</Link></LinkItem>
                    <LinkItem><Link href="/gallery">Galleri</Link></LinkItem>
                </LinksWrapper>
            )}
            
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
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
`;

const LinkItem = styled.li`
    width: 100%;
    padding: 0 1.1em;
    color: #222;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    margin-bottom: 10px; 
`;

const Links = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;