import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretUp, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../StyledComponents/PageTitle';



const Question = ( {question, answer} ) => {
    const [showAnswer, setShowAnswer] = useState(false);
    
    
    function toggle() {
        setShowAnswer(!showAnswer);
    }

    return (
        <>
            <QuestionBox>
                <QuestionStyle onClick={toggle}>
                    <FontAwesomeIcon 
                        style={{width: "10"}}
                        icon={showAnswer ? faCaretUp : faCaretRight}
                    />
                    <p>{question}</p> 
                </QuestionStyle>
                <Answer style={{display: showAnswer ? "block" : "none"}}>
                    <p>{answer}</p>
                </Answer>
            </QuestionBox>
        </>
    )
};



const Questions = () => {
    
    return (
        <section style={{width: "80%"}}>
            <PageTitle>Ofte stilte spørsmål</PageTitle>
            <Question 
                question="Hvor lang tid tar det å lage ferdig et bilde?"
                answer="Det er ofte vanskelig å anslå tidsbruk på en kreativ prosess. Alcohol ink-bilder vil ta alt fra 2-8 uker fra idé til ferdig produkt. Ved spesielle henvendelser som krever bestilling av ekstra materialer, vil det ta lenger tid. Et malerier på lerret vil ta minimum 6-12 uker før ferdig produkt, som også innebærer justeringer etter kundens ønske. Ved omfattende detaljarbeid, store størrelser og kompleksitet, kan det ta lenger tid.I perioder med høy etterspørsel, kan det også være venteliste."
            />
            <Question 
                question="Hva koster et bestillingsverk?"
                answer="Bestillingsverk vil ofte være noe høyere priset enn ferdigstilte kunstverk til salgs. Prisen varierer ut fra størrelse, materialkostnader, kompleksiteten rundt utførelse samt tidsbruk. Spesielle forespørsler vil også være med i prisgrunnlaget.Det vil være en 35 % depositum på bestillingsverk.
                Send meg gjerne en uforpliktende forespørsel om prisanslag."
            />
        </section>
    )
};



//--------- STYLE --------- //


const QuestionBox = styled.article`
    padding: 0.5em;
    margin-left: 2em;
    margin-right: 2em;
    border-bottom: 1px solid black;
`;

const QuestionStyle = styled.button`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 0.5em;
    border: none;
    width: 90%;
    background-color: white;
    text-align: left;

    p{
        font-size: 15px;
        padding-left: 0.5em;
    }
`;

const Answer = styled.section`
    width: 90%;
    font-size: 0.8rem;

    overflow: hidden;
    animation: open 0.8s forwards;
    
    @keyframes open {
        0%{
            
            height: 0;
        }
        100%{
            height: 120px;
        }
    }
`;


export default Questions;


