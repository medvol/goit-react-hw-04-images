import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Overlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`
export  const CloseButton = styled(AiOutlineCloseCircle)`
position: absolute;
  top: 8px;
  right: 26px;
  width: 36px;
  height: 36px;
  fill: white;
`

export const ModalContent = styled.div`
max-width: calc(100vw - 56px);
  max-height: calc(100vh - 56px);
  overflow: hidden;
  object-fit: contain;
`

