import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const NavigationButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 10px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1010;

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;
