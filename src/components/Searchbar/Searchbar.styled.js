import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${p => p.theme.space[9]}px;
    background-color: ${p=> p.theme.colors.white};
    border-radius:${p=>p.theme.radii.normal};
    overflow: hidden;
`
export const SearchFormButton = styled.button`
    display: flex;    
    border: 0;    
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    :hover {
        opacity: 1;
        }
`

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
    border: none;
    outline: none;
    padding-left: ${p => p.theme.space[2]}px; 
    padding-right: ${p => p.theme.space[2]}px;
    ::placeholder {
        font: inherit;
        font-size: ${p => p.theme.fontSizes.s};
        }
`

