import { Label, Input, TextBoxIn, ErrorIcon, CorrectIcon, ErrorMessage } from './Style/stylesTextBoxInputLevel1'
import { StyledSquare, LeftSide, OtherSides, InputM2, TextWithBoxIn3, ButtonVideo } from './Style/stylesTextBoxInputLevel3'
import VideoBox from './VideoBox';
import { OscureContainer } from './Style/styledScrollButton';
import ScrollsButton from './ScrollButton';


const Square = () => {
    return (
        <StyledSquare>
            <LeftSide></LeftSide>
            <OtherSides></OtherSides>
        </StyledSquare>
    );
};


function TextBoxInputLevel3({ TextLevelBox3, status, errorMessage, labelInput3, setLevels3, levels3, textBottonVideo, setIsAddVideoVisible, isAddVideoVisible }) {
    const handleTextChangeM2 = (index, text) => {
        const newLevels3 = [...levels3];
        newLevels3[index].textM3 = text;
        setLevels3(newLevels3);
    };

    return (
        <>
            {levels3.map((level, index) => (
                level.condition3 && (
                    <OscureContainer key={index}>
                    <TextWithBoxIn3 >
                        <Square />
                        <Square />
                        <TextBoxIn>{TextLevelBox3}</TextBoxIn>
                        <InputM2 status={status}>
                            <Label>{labelInput3}</Label>
                            <Input type="text" value={level.textM3} onChange={(e) => handleTextChangeM2(index, e.target.value)} />
                            {status === 1 ? <ErrorIcon>❌</ErrorIcon> : status === 2 && <CorrectIcon>✔</CorrectIcon>}
                        </InputM2>
                        {status === 1 && <ErrorMessage>{errorMessage}</ErrorMessage>}

                        {isAddVideoVisible ? (
                            <ButtonVideo onClick={() => setIsAddVideoVisible(false)}>{textBottonVideo}</ButtonVideo>
                        ) : (
                            <VideoBox></VideoBox>
                            )}
                            <ScrollsButton/>
                        </TextWithBoxIn3>
                    </OscureContainer>
                )
            ))}
        </>
    );

}



export default TextBoxInputLevel3;