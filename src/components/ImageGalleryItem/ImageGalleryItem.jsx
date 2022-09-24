import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { ImageCard, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({showModal}) =>( {
            showModal: !showModal
        }))
    }

    render() {
        const { webformatURL, tags, largeImageURL } = this.props.item;
        const { showModal } = this.state;
        const { toggleModal } = this;
        return (
            <>
                {showModal && <Modal closeModal={toggleModal}>
                                  <img src={largeImageURL} alt={tags} />
                              </Modal>}
                 <ImageCard onClick={toggleModal}>
                     <Image src={webformatURL} alt={tags} />
                 </ImageCard>
            </>            
         )
    }   
}

ImageGalleryItem.propTypes = {
     items: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,                      
        })
}