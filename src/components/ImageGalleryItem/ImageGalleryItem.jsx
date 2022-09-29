import {useState} from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { ImageCard, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    const { webformatURL, tags, largeImageURL } = item;

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


ImageGalleryItem.propTypes = {
     items: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,                      
        })
}