import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Overlay, ModalContent, CloseButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component{
    componentDidMount() {
        console.log(this.props)
        
    }
    componentWillUnmount() {
        
    }

    render() {
        const { children, closeModal } = this.props;

        return createPortal(
            <Overlay >
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