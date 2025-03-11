import styled from 'styled-components';

const BoxVideo = styled.div`
  width: 162px;
  height: 41px;
  border: 1px solid rgba(23, 23, 23, 0.24);
  margin-right: 106px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #575757;
`;

const DeleteIconBox = styled.button`
  position: absolute;
  top: 35%;
  right: -4px;
  transform: translateY(-50%);
  color: #575757;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: auto;
  height: auto;
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 6px;
  left: 0;
  height: 3px;
  background-color: #e67e22;
`;
const Title = styled.div`
  position: absolute;
  top: 33%;
  left: 52%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  color: #575757;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 115px;
  height: 12px;
`;

const ImgDeleteBox = styled.img`
   width: 13px;
   height: 13px;
`;


export { BoxVideo, PlayButton, DeleteIconBox, Title, ProgressBar,ImgDeleteBox};