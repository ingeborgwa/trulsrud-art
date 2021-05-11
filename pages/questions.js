import React, { useState } from 'react';
import styled from 'styled-components';






const Question = ( {question, answer} ) => {
    const [showAnswer, setShowAnswer] = useState(false);
    
    function toggle() {
        setShowAnswer(!showAnswer);
    }

    return (
        <>
            <QuestionBox>
                <QuestionStyle onClick={(e) => toggle(e)}>{question}</QuestionStyle>
                <Answer style={{display: showAnswer?"block":"none"}}>
                    <p>{answer}</p>
                </Answer>
            </QuestionBox>
        </>
    )
};



const Questions = () => {
    
    return (
        <>
            <h1>Spørsmål og svar</h1>
            <Question 
                question="Hvor lang tid tar det å lage ferdig et bilde?"
                answer="Det er ofte vanskelig å anslå tidsbruk på en kreativ prosess. Alcohol ink-bilder vil ta alt fra 2-8 uker fra idé til ferdig produkt. Ved spesielle henvendelser som krever bestilling av ekstra materialer, vil det ta lenger tid. Et malerier på lerret vil ta minimum 6-12 uker før ferdig produkt, som også innebærer justeringer etter kundens ønske. Ved omfattende detaljarbeid, store størrelser og kompleksitet, kan det ta lenger tid.I perioder med høy etterspørsel, kan det også være venteliste."
            />
            <Question 
                question="Hva koster et bestillingsverk?"
                answer="Bestillingsverk vil ofte være noe høyere priset enn ferdigstilte kunstverk til salgs. Prisen varierer ut fra størrelse, materialkostnader, kompleksiteten rundt utførelse samt tidsbruk. Spesielle forespørsler vil også være med i prisgrunnlaget.Det vil være en 35 % depositum på bestillingsverk.
                Send meg gjerne en uforpliktende forespørsel om prisanslag."
            />
        </>
    )
};



const QuestionBox = styled.article`
    padding: 0.5em;
    margin: 2em;
    border-bottom: 1px solid black;
`;

const QuestionStyle = styled.button`
    margin-bottom: 0.5em;
    border: none;
    width: 80%;
    background-color: white;
    text-align: left;
    
   
`;



const Answer = styled.section`
    width: 80%;
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
