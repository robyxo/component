import styled from 'styled-components';

const MainBoxIn = styled.div`
  position: relative;
  display: flex;
  width: 1396px;
  height: auto;
`;

const TextWithBoxIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1116px;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const InputM = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 708px;
  border: 1px solid ${props => {
        if (props.status === 1) return '#E11900';
        if (props.status === 2) return 'green'; 
        return 'rgba(23, 23, 23, 0.24)'; 
    }};
  border-radius: 5px;
  margin: auto;
  margin-left:50px;
  height: 45px;
  position: relative;
`;

const Label = styled.label`
  font-size: 12px; 
  font-weight: normal;
  color: #575757; 
  text-align: left;
  width: 97%;

`;

const Input = styled.input`
  font-weight: bold;
  font-size: 14px;
  width: 96%;
  border: none;
  outline: none;
`;

const TextBoxIn = styled.div`
  width: 100px;
  height: 35px;
  font-weight: bold;
  font-size: 14px;
  margin-right: 1px;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  margin-top: 10px;
  margin-left: 18px;
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 16px;
`;

const ErrorIcon = styled(Icon)`
  color: #E11900;
  cursor: pointer;
`;

const CorrectIcon = styled(Icon)`
  color: green;
  cursor: pointer;

`;
const ErrorMessage = styled.div`
  font-size: 12px;
  color: #E11900;
  margin-left: 170px;
`;

const IconBox = styled.div`
  width: 39px;
  height: 39px;
  display: flex;
  align-items: center;
  top: 50%;
  right: 5px;
`;

export { InputM, Label, Input, TextBoxIn, TextWithBoxIn, MainBoxIn, Icon, ErrorIcon, CorrectIcon, ErrorMessage, IconBox }