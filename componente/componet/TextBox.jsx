import { TextBoxM, TextB, TextWithBox} from './Style/stylesTextBox'
function Box({ textM, TextLevelBox }) {
    return (
        <>
            <TextWithBox>
                <TextB>{TextLevelBox}</TextB>
                <TextBoxM>{textM}</TextBoxM>
            </TextWithBox>
        </>
    );
}
export default Box;