import styled from 'styled-components';

const StyledSquare = styled.div`
  width: 10px;
  height: 70px;
  display: flex;
  margin-left: 20px;
`;

const LeftSide = styled.div`
  flex: 1;
  background-color: orange;
  font-weight: bold;
  border-left: 2px solid orange;
`;

const OtherSides = styled.div`
  flex: 3;
  background-color: transparent;
`;
const InputM2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 680px;
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
const TextWithBoxIn2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1116px;
  border-radius: 5px;
`;

export { StyledSquare, LeftSide, OtherSides, InputM2, TextWithBoxIn2 }