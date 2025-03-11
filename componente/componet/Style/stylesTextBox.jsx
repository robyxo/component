import styled from 'styled-components';

const TextB = styled.div`
  width: 100px;
  height: 35px;
  font-weight: bold;
  font-size: 14px;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;

const TextWithBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  border-radius: 5px;
  margin-left: 18px;
  margin-top: 15px;
`;

const TextBoxM = styled.div`
  font-weight: bold;
  font-size: 14px; 
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  width: 835px;
  height: 35px;
  margin-left: 5px;
`;



export { TextBoxM, TextB, TextWithBox }