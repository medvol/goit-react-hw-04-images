import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item: {webformatURL, tags} }) => {
    return (
        <li >
            <img src={webformatURL} alt={tags} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
     items: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
                      
        })
}