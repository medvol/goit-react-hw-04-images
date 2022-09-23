import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Overlay, ModalContent, CloseButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        
    }

    handleKeyDown = event => {
        if (event.code === 'Escape'){
            this.props.closeModal();
        }
    }

    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.closeModal();
        }
    }

    render() {
        const { children, closeModal } = this.props;

        return createPortal(
            <Overlay onClick={this.handleOverlayClick} >
                <CloseButton onClick = {closeModal}>
                    <AiOutlineCloseCircle  />
                </CloseButton>
                
                <ModalContent>{ children}</ModalContent>
            </Overlay>, modalRoot)
    }
}




Modal.propTypes = {
    children: PropTypes.node
}