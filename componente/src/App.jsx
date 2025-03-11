import { createGlobalStyle } from 'styled-components'
import Componet from '../componet/Component'

const GlobalStyle = createGlobalStyle`
    button, div, input, label{
        font-family: 'Inter';
    }`

function App() {
  return (
      <>
          <GlobalStyle/>
          <Componet
              buttonGlobal={"Aggiungi Livello 1"}
              TextLevelBox={"Livello 1 Tesvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"}
              labelInput={"Testo"}

              status={0}
              errorMessage={"errore"}

              buttonLevel2={"Livello 2"}
              TextLevelBox2={"Livello 2 Tesvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"}
              labelInput2={"Testo2"}

              buttonLevel3={"Livello 3"}
              TextLevelBox3={"Livello 3 Tesvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"}
              labelInput3={"Testo3"}
              textBottonVideo={"Add a video"}

              Text={"Testo"}
              

          />
    </>
  )
}

export default App
