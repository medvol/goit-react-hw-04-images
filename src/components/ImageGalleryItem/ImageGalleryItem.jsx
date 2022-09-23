import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

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
                 <li onClick={toggleModal}>
                     <img src={webformatURL} alt={tags} />
                 </li>
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