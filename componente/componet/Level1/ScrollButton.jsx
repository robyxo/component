import { ScrollButtons, ScrollButton, Accordion, DeleteIcon, OscureContent, Add3Icon } from './Style/styledScrollButton'
import accordionUp from '../assets/accordionUp.svg'
import accordionDown from '../assets/accordionDown.svg'
import trash from '../assets/Trash.svg'
import add3 from '../assets/add3.svg'

function ScrollsButton({ moveLevel2, deleteLevel2, index }) {
    return (
        <>
      <OscureContent>
                <ScrollButtons>
                    <Add3Icon  ><img src={add3} alt="Add3" /> </Add3Icon>
                    <ScrollButton onClick={() => moveLevel2(index, 'up')}>
                        <Accordion src={accordionUp} alt="Up" />
                        {console.log(index) }
                    </ScrollButton>
                    <ScrollButton onClick={() => moveLevel2(index, 'down')}>
                        <Accordion src={accordionDown} alt="Down" />
                    </ScrollButton>
          </ScrollButtons>
                <DeleteIcon onClick={deleteLevel2}> <img src={trash} alt="Delete All" /></DeleteIcon>
      </OscureContent>
        </>
  );
}

export default ScrollsButton;