import { InputM, Label, Input, TextBoxIn, CorrectIcon, ErrorMessage, ErrorIcon, TextWithBoxIn, IconBox } from './Style/stylesTextBoxInputLevel1'

function TextBoxInputLevel1({ textM, setTextM, TextLevelBox, status, errorMessage, labelInput}) {
    const handleTextChangeM = (event) => {
        setTextM(event.target.value);
    }
    return (
        <>
                <TextWithBoxIn>
                    <TextBoxIn>{TextLevelBox}</TextBoxIn>
                <InputM status={status}>
                    <Label>{labelInput}</Label>
                    <Input type="text" value={textM} onChange={handleTextChangeM}/>
                    {status === 1 ? <ErrorIcon>❌</ErrorIcon> : status === 2 && <CorrectIcon>✔</CorrectIcon>}
                </InputM>

                <IconBox>

                </IconBox>

            </TextWithBoxIn>
            {status === 1 && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
  );
}
export default TextBoxInputLevel1;