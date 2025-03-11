import ScrollsButton from './ScrollButton';
import { Label, Input, TextBoxIn, ErrorIcon, CorrectIcon, ErrorMessage } from './Style/stylesTextBoxInputLevel1'
import { StyledSquare, LeftSide, OtherSides, InputM2, TextWithBoxIn2 } from './Style/stylesTextBoxInputLevel2'
import { OscureContainer } from './Style/styledScrollButton';

const Square = () => {
    return (
        <StyledSquare>
            <LeftSide></LeftSide>
            <OtherSides></OtherSides>
        </StyledSquare>
    );
};
function TextBoxInputLevel2({ TextLevelBox2, status, errorMessage, labelInput2, setLevels2, levels2, moveLevel2 }) {
    const handleTextChangeM2 = (index, text) => {
        const newLevels2 = [...levels2];
        newLevels2[index].textM2 = text;
        setLevels2(newLevels2);
    };
    const deleteLevel2 = (index) => {
        const newLevels2 = [...levels2];
        newLevels2.splice(index, 1);
        setLevels2(newLevels2);
        console.log("Cancella")
    };
    return (
        <>
            {levels2.map((level, index) => (
                level.condition2 && (
                    <OscureContainer key={index}>
                    <TextWithBoxIn2 >
                        <Square />
                        <TextBoxIn>{TextLevelBox2}</TextBoxIn>
                        <InputM2 status={status}>
                            <Label>{labelInput2}</Label>
                            <Input type="text" value={level.textM2} onChange={(e) => handleTextChangeM2(index, e.target.value)} />
                            {status === 1 ? <ErrorIcon>❌</ErrorIcon> : status === 2 && <CorrectIcon>✔</CorrectIcon>}
                        </InputM2>
                        {status === 1 && <ErrorMessage>{errorMessage}</ErrorMessage>}
                            <ScrollsButton index={index} moveLevel2={(index, direction) => moveLevel2(index, direction)}
                                deleteLevel2={() => deleteLevel2(index)} />
                        </TextWithBoxIn2> 
                    </OscureContainer>
                )
            ))}
        </>
    );

}
export default TextBoxInputLevel2;