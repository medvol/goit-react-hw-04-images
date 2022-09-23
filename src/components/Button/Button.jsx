import React from 'react';
import PropTypes from 'prop-types';

export const LoadMore = ({ type, text, onClick }) => {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    )
}

LoadMore.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}