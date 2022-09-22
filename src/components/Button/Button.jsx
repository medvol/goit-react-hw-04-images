import React from 'react';
import PropTypes from 'prop-types';

export const LoadMore = ({ type, text, onClick }) => {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    )
}