import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;



// import React, { useState } from 'react';
// import Image from 'next/image';
// import styled from 'styled-components';
// import { Modal, ModalBody } from "reactstrap";


// function ModalContainer() {
//     const [modalOpen, setModalOpen] = useState(false);



//     return(
//         <MainContainer>
//             <Button
//                 color="primary"
//                 type="button"
//                 onClick={() => setModalOpen(!modalOpen)}
//             >
//                 Se mer
//             </Button>
//             <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalLabel">Navn på bildet</h5>
//                     <button
//                         aria-label="Close"
//                         className=" close"
//                         type="button"
//                         onClick={() => setModalOpen(!modalOpen)}
//                     >
//                         <span aria-hidden={true}>Lukk</span>
//                     </button>
//                 </div>
//                 <ModalBody>
//                 <Image 
//                     src="/landingpage.png"
//                     alt="Bildet malt i grønt med alkohol ink."
//                     width={200}
//                     height={200}
//                 />
//                 </ModalBody>
                
//             </Modal>
//         </MainContainer>
//     )
// };

// export default ModalContainer;

// const MainContainer = styled.main`
//     padding:2em; 
// `;



// const Button = styled.button`
//     display: flex;
//     justify-content: left;
//     align-items: center;
//     border: none;
//     background-color: white;
//     text-align: left;

//     p{
//         font-size: 0.9rem;
//         padding-right: 0.5em;
//     }

// `;

