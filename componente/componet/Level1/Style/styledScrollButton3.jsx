import styled from 'styled-components';

const ScrollButtons = styled.div`
  position: absolute;
  top: 52%;
  right: 66px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeleteIcon = styled.button`
    position: absolute;
    top: 52%;
    right: 32px;
    transform: translateY(-50%);
    font-size: 30px;
    color: black;
    cursor: pointer;
    background-color: transparent;
    border: none;
`;
const OscureContainer = styled.div`
  position: relative;
`;

const OscureContent = styled.div`
  opacity: 0; 
  transition: opacity 0.3s ease;

  ${OscureContainer}:hover & {
    opacity: 1; 
  }
`;
const ScrollButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #575757;
  margin-bottom: -2px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 150%;
  }
`;

const Accordion = styled.img`
   width: 17px;
   height: 9px;
`;

export { ScrollButtons, ScrollButton, Accordion, DeleteIcon, OscureContainer, OscureContent }