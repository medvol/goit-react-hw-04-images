import styled from "styled-components";

export const ImageCard = styled.li`
    border-radius:${p=>p.theme.radii.normal};
    box-shadow: ${p=>p.theme.shadows.card};
`

export const Image = styled.img`
    width: 100%;
    height: ${p => p.theme.space[8]}px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        :hover {
            transform: scale(1.03);
            cursor: zoom-in;
            }
`
