import { ScrollButtons, ScrollButton, Accordion, DeleteIcon,OscureContent } from './Style/styledScrollButton'
import accordionUp from '../assets/accordionUp.svg'
import accordionDown from '../assets/accordionDown.svg'
import trash from '../assets/Trash.svg'

function ScrollsButton3({ moveLevel2, deleteLevel2, index }) {
    return (
        <>
      <OscureContent>
          <ScrollButtons>
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

export default ScrollsButton3;