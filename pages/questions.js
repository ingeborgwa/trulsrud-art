import React, { useState, useEffect  } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretUp, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/StyledComponents/PageTitle';
import { MainContainer } from '../components/StyledComponents/Containers';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';



const Question = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [questionData, setQuestionData] = useState([]);


    useEffect(() => {
            
        const client = new Cosmic();
        const bucket = client.bucket({
            slug: process.env.NEXT_PUBLIC_BUCKET_SLUG,      
            read_key: process.env.NEXT_PUBLIC_READ_KEY  
        });
        
        

        bucket.getObjects({
            slug: 'questions',
            query: {
                type: 'questions'
              },
            props: 'slug,title,content',
            
        })
        .then(data => {
            setQuestionData(data.objects);
            console.log(data)
            
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    
    function toggle() {
        setShowAnswer(!showAnswer);
    }


    return (
        <>
            {questionData.map(question => {
                return (
                    <QuestionBox key={question.slug}>
                        <QuestionStyle onClick={toggle}>
                            <FontAwesomeIcon 
                                icon={showAnswer ? faCaretUp : faCaretRight}
                            />
                            <p>{question.title}</p>
                        </QuestionStyle>
                        <Answer style={{display: showAnswer ? "block" : "none"}}>
                            <p dangerouslySetInnerHTML={{__html:question.content}} />
                        </Answer>
                    </QuestionBox>
                )
            })}
            
        </>
    )
};



const Questions = () => {
    
    return (
        <>
            <NavigationBar/>
            <MainContainer>
            <section style={{width: "60%"}}>
                <PageTitle>Ofte stilte spørsmål</PageTitle>
                <Question />
            </section>
            </MainContainer>
            <Footer/>
        </>
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





















// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faCaretUp, faCaretRight } from '@fortawesome/free-solid-svg-icons';



// const Question = ( {question, answer} ) => {
//     const [showAnswer, setShowAnswer] = useState(false);
    
    
//     function toggle() {
//         setShowAnswer(!showAnswer);
//     }

//     return (
//         <>
//             <QuestionBox>
//                 <QuestionStyle onClick={toggle}>
//                     <FontAwesomeIcon 
//                         icon={showAnswer ? faCaretUp : faCaretRight}
//                     />
//                     <p>{question}</p> 
//                 </QuestionStyle>
//                 <Answer style={{display: showAnswer ? "block" : "none"}}>
//                     <p>{answer}</p>
//                 </Answer>
//             </QuestionBox>
//         </>
//     )
// };



// const Questions = () => {
    
//     return (
//         <>
//             <h1>Ofte stilte spørsmål</h1>
//             <Question 
//                 question="Hvor lang tid tar det å lage ferdig et bilde?"
//                 answer="Det er ofte vanskelig å anslå tidsbruk på en kreativ prosess. Alcohol ink-bilder vil ta alt fra 2-8 uker fra idé til ferdig produkt. Ved spesielle henvendelser som krever bestilling av ekstra materialer, vil det ta lenger tid. Et malerier på lerret vil ta minimum 6-12 uker før ferdig produkt, som også innebærer justeringer etter kundens ønske. Ved omfattende detaljarbeid, store størrelser og kompleksitet, kan det ta lenger tid.I perioder med høy etterspørsel, kan det også være venteliste."
//             />
//             <Question 
//                 question="Hva koster et bestillingsverk?"
//                 answer="Bestillingsverk vil ofte være noe høyere priset enn ferdigstilte kunstverk til salgs. Prisen varierer ut fra størrelse, materialkostnader, kompleksiteten rundt utførelse samt tidsbruk. Spesielle forespørsler vil også være med i prisgrunnlaget.Det vil være en 35 % depositum på bestillingsverk.
//                 Send meg gjerne en uforpliktende forespørsel om prisanslag."
//             />
//             <Question 
//                 question="Får jeg se bildet før det er ferdig?"
//                 answer="Det er viktig for meg at du som kunde blir fornøyd med kunsten du kjøper. Når maleriet nærmer seg ferdig, vil du få et bilde av kunstverket for å høre om du er fornøyd, eller om du ønsker noen endringer før det ferdige resultatet."
//             />
//         </>
//     )
// };


// const QuestionBox = styled.article`
//     padding: 0.5em;
//     margin-left: 2em;
//     margin-right: 2em;
//     border-bottom: 1px solid black;
// `;

// const QuestionStyle = styled.button`
//     display: flex;
//     justify-content: left;
//     align-items: center;
//     margin-bottom: 0.5em;
//     border: none;
//     width: 80%;
//     background-color: white;
//     text-align: left;

//     p{
//         font-size: 1rem;
//         padding-left: 0.5em;
//     }

// `;




// const Answer = styled.section`
//     width: 80%;
//     font-size: 0.8rem;
    

//     overflow: hidden;
//     animation: open 0.5s forwards;
    
//     @keyframes open {
//         0%{
            
//             height: 0;
//         }
//         100%{
//             height: 120px;
//         }
//     }
// `;


// export default Questions;


