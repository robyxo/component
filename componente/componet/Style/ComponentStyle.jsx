import styled from 'styled-components';

const MainBox = styled.div`
  position: relative;
  display: flex;
  width: 1369px
  height: auto;
  align-items: center;
`;
const CentralBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1116px;
  height: auto;
  border: 1px solid rgba(23, 23, 23, 0.24);
  border-radius: 5px;
  position: relative;
`;

const ButtonLevel = styled.button`
  width: 165px;
  height: 44px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const IconBox = styled.div`
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => props.iconPosition};
  right: 5px;
  transform: translateY(${props => props.iconTransform}%);
`;
const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonLevel2 = styled.button`
  bottom: 18px;
  left: 12px;
  width: 165px;
  height: 44px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px; 
  margin-right: 40px;
`;

const ButtonLevel3 = styled.button`
  bottom: 18px;
  left: 12px;
  width: 165px;
  height: 44px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px; 
  margin-right: 40px;
  opacity: ${props => props.isActive ? '1' : '0.1'};
  pointer-events: ${props => props.isActive ? 'auto' : 'none'};
`;


const TextBoxS = styled.div`
  font-size: 12px; 
  width: 935px;
  height: 18px;
  margin-left: 23px;
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; 
  color:#575757;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export { MainBox, CentralBox, ButtonLevel, IconBox, Button, ButtonLevel2, TextBoxS, ButtonContainer, ButtonLevel3 };