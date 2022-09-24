import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';



export const ImageGallery = ({ images }) => {
    return (        
        <Gallery >
            {images.map(image => (
                < ImageGalleryItem key={image.id} item={image} />
            ))}
        </Gallery>       )
}

ImageGallery.propTypes = {
     images: PropTypes.arrayOf (PropTypes.shape ({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
                      
        }))
}
