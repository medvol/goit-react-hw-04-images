import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

export const LoadMore = ({ type, text, onClick, disable }) => {
    return (
        <LoadMoreButton type={type} onClick={onClick} disabled={disable}>
            {text}
        </LoadMoreButton>
    )
}

LoadMore.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disable:PropTypes.bool.isRequired
}