import styled from "styled-components";

export const LoadMoreButton = styled.button`
    padding: 8px 16px;
    border-radius:${p=>p.theme.radii.normal};
    background-color: ${p=> p.theme.colors.background};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    color: ${p=> p.theme.colors.white};
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: ${p=>p.theme.fontSizes.m};
    line-height: ${p=>p.theme.lineHeights.body};
    font-style: normal;
    font-weight: ${p=>p.theme.fontWeights.semibold};
    width: ${p => p.theme.space[7]}px;
    box-shadow: ${p=>p.theme.shadows.card};
        :hover,
        :focus {
        background-color: ${p=> p.theme.colors.accent};
        }

`