import {useEffect} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Overlay, ModalContent, CloseButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children }) => {

    const handleKeyDown = event => {
        if (event.code === 'Escape') closeModal();
    }    

    const handleOverlayClick = event => {
        if (event.currentTarget === event.target) closeModal();        
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
        
    }) 

    return createPortal(
            <Overlay onClick={handleOverlayClick} >
                <CloseButton onClick = {closeModal}>
                    <AiOutlineCloseCircle  />
                </CloseButton>
                
                <ModalContent>{ children}</ModalContent>
            </Overlay>, modalRoot)
    
}

Modal.propTypes = {
    children: PropTypes.node
}