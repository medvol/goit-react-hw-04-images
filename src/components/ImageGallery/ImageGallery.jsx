import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
    return (
        <Gallery >
            {items.map(item => (
                < ImageGalleryItem key={item.id}  item = { item } />
            ))}
        </Gallery>
    )
}

ImageGallery.propTypes = {
     items: PropTypes.arrayOf (PropTypes.shape ({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
                      
        }))   
}