import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, ModalBody, ModalFooter } from "reactstrap";


function ModalContainer() {
    const [modalOpen, setModalOpen] = useState(false);



    return(
        <MainContainer>
            <Button
                color="primary"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
            >
                Se mer
            </Button>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal titel</h5>
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <span aria-hidden={true}>Lukk</span>
                    </button>
                </div>
                <ModalBody>
                <Image 
                    src="/landingpage.png"
                    alt="Bildet malt i grønt med alkohol ink."
                    width={200}
                    height={200}
                />
                </ModalBody>
                
            </Modal>
        </MainContainer>
    )
};

export default ModalContainer;

const MainContainer = styled.main`
    padding:2em; 
`;



const Button = styled.button`
    display: flex;
    justify-content: left;
    align-items: center;
    border: none;
    background-color: white;
    text-align: left;

    p{
        font-size: 0.9rem;
        padding-right: 0.5em;
    }

`;