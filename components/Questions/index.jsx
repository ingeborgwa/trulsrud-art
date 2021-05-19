import React, { useState, useEffect  } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretUp, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../StyledComponents/PageTitle';


const Question = ({ question }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    
    
    function toggle() {
        setShowAnswer(!showAnswer);
    }


    return (
        <>
            <QuestionBox>
                <QuestionStyle onClick={toggle}>
                    <FontAwesomeIcon 
                        icon={showAnswer ? faCaretUp : faCaretRight}
                    />
                    <p>{question.title}</p>
                </QuestionStyle>
                <Answer style={{maxHeight: showAnswer ? "600px" : "0px"}}>
                    <p dangerouslySetInnerHTML={{__html:question.content}} />
                </Answer>
            </QuestionBox> 
        </>
    )
};


const Questions = () => {
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



    return (
        <>
            <section style={{width: "80%"}}>
                <PageTitle>Ofte stilte spørsmål</PageTitle>
                {questionData.map(question => {
                return (
                    <Question question={question}/>
                )
            })}
            </section>
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
        font-size: 0.85rem;
        padding-left: 0.5em;
    }
`;

const Answer = styled.section`
    width: 90%;
    font-size: 0.8rem;

    transition: .8s ease-in-out;
    overflow: hidden;
    max-height: 600px;
    
    
`;


export default Questions;






