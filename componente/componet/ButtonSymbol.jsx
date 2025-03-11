import { useState } from 'react';
import { Button } from './Style/ComponentStyle'
import accordionUp from './assets/accordionUp.svg'
import accordionDown from './assets/accordionDown.svg'

function ButtonSymbol({ifSymbol}) {
    const [symbol, setSymbol] = useState(accordionDown);
    const changeSymbol = () => {
        setSymbol(symbol === accordionDown ? accordionUp : accordionDown);
        ifSymbol();
    };

  return (
      <Button onClick={changeSymbol}>
          <img src={symbol} alt="Accordion" />
      </Button>

  );
}

export default ButtonSymbol;