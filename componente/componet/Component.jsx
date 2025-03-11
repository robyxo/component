import { MainBox, CentralBox, ButtonLevel, IconBox, ButtonLevel2, TextBoxS, ButtonContainer, ButtonLevel3 } from './Style/ComponentStyle'
import ButtonSymbol from './ButtonSymbol'
import { useState } from 'react';
import Box from './TextBox';
import TextBoxInputLevel1 from './Level1/TextBoxInputLevel1';
import TextBoxInputLevel2 from './Level1/TextBoxInputLevel2';
import TextBoxInputLevel3 from './Level1/TextBoxInputLevel3';

function Component({ buttonGlobal, buttonLevel2, TextLevelBox, Text, status, errorMessage, labelInput, TextLevelBox2, labelInput2, buttonLevel3, TextLevelBox3, labelInput3, textBottonVideo }) {

    const [isLevel3ActiveArray, setIsLevel3ActiveArray] = useState([false]);
    const [levels, setLevels] = useState([{ condition: true, textM: '', Text }]);
    const [levels2Array, setLevels2Array] = useState([[]]);
    const [levels3Array, setLevels3Array] = useState([[]]);
    const [isAddVideoVisibleArray, setIsAddVideoVisibleArray] = useState([true]);
    const [iconPositions, setIconPositions] = useState(['auto']);
    const [iconTransforms, setIconTransforms] = useState([0]);

    const addLevel = () => {
        const newLevel = { condition: true, textM: '', Text };
        setLevels([...levels, newLevel]);
        setLevels2Array([...levels2Array, []]);
        setLevels3Array([...levels3Array, []]);
        setIsLevel3ActiveArray(prevArray => [...prevArray, false]);
        setIsAddVideoVisibleArray(prevArray => [...prevArray, true]);
        setIconPositions(prevPositions => [...prevPositions, 'auto']);
        setIconTransforms(prevTransforms => [...prevTransforms, 0]);
    };

    const addLevel2 = (levelIndex) => {
        const newLevels2Array = [...levels2Array];
        newLevels2Array[levelIndex] = [...newLevels2Array[levelIndex], { condition2: true, textM2: '', Text }];
        setLevels2Array(newLevels2Array);

        setIsLevel3ActiveArray(prevArray => {
            const newArray = [...prevArray];
            newArray[levelIndex] = true;
            return newArray;
        });
    };

    const addLevel3 = (levelIndex) => {
        const newLevels3Array = [...levels3Array];
        newLevels3Array[levelIndex] = [...newLevels3Array[levelIndex], { condition3: true, textM3: '', Text }];
        setLevels3Array(newLevels3Array);
        setIsLevel3ActiveArray(prevArray => {
            const newArray = [...prevArray];
            newArray[levelIndex] = true;
            return newArray;
        });
    };

    const moveLevel2 = (levelIndex, direction) => {
        const newLevels2Array = [...levels2Array];
        const levelToMove = newLevels2Array[levelIndex];
        if (direction === 'up' && levelIndex > 0) {

            [newLevels2Array[levelIndex], newLevels2Array[levelIndex - 1]] = [newLevels2Array[levelIndex - 1], levelToMove];
        } else if (direction === 'down' && levelIndex < newLevels2Array.length - 1) {

            [newLevels2Array[levelIndex], newLevels2Array[levelIndex + 1]] = [newLevels2Array[levelIndex + 1], levelToMove];
        }
        setLevels2Array(newLevels2Array);
        console.log("Spostamento", direction, levelIndex);
    };

    const toggleAddVideoVisibility = (levelIndex) => {
        setIsAddVideoVisibleArray(prevArray => {
            const newArray = [...prevArray];
            newArray[levelIndex] = !newArray[levelIndex];
            return newArray;
        });
    };

    return (
        <>
            {levels.map((level, index) => {
                const ifSymbol = () => {
                    const newLevels = [...levels];
                    const newPosition = iconPositions[index] === 'auto' ? '35px' : 'auto';
                    const newPositions = [...iconPositions]; newPositions[index] = newPosition;
                    setIconPositions(newPositions);

                    const newTransform = iconTransforms[index] === 0 ? -40 : 0;
                    const newTransforms = [...iconTransforms]; newTransforms[index] = newTransform;
                    setIconTransforms(newTransforms);
                    newLevels[index].condition = !newLevels[index].condition;
                    setLevels(newLevels);
                };
                return (
                    <MainBox
                        key={index}>
                        <CentralBox>
                            {level.condition ?
                                (<>
                                    <Box 
                                        textM={level.textM}
                                        TextLevelBox={TextLevelBox} />

                                    {/*visulizzazzione livello 2
                                        levels2Array[index].map((level2, index2) => (
                                            <div key={index2}>
                                                {level2.condition2 && (
                                                    <Box
                                                        key={index2}
                                                        textM={level2.textM2}
                                                        TextLevelBox={TextLevelBox2}
                                                    />
                                                )}
                                            </div>
                                        ))}

                                    {//visulizzazzione livello 3
                                        levels3Array[index].map((level3, index3) => (
                                            <div key={index3}>
                                                {level3.condition3 && (
                                                    <Box
                                                        key={index3}
                                                        textM={level3.textM3}
                                                        TextLevelBox={TextLevelBox3}
                                                    />
                                                )}
                                            </div>
                                        ))*/}
                    
                                    <TextBoxS>{level.Text} </TextBoxS>
                                </>
                                ) : (<> {/*creazione livello 1 input*/ }
                                    <TextBoxInputLevel1
                                    labelInput={labelInput }
                                    textM={level.textM}
                                    TextLevelBox={TextLevelBox}
                                    status={status}
                                    errorMessage={errorMessage}
                                    setTextM={(text) => {
                                        const newLevels = [...levels];
                                        newLevels[index].textM = text;
                                            setLevels(newLevels);
                                        }} /> 

                                    <>
                                            <TextBoxInputLevel2
                                            labelInput2={labelInput2}
                                            TextLevelBox2={TextLevelBox2}
                                            status={status}
                                            errorMessage={errorMessage}
                                            setLevels2={(newLevels2) => {
                                                const newLevels2Array = [...levels2Array];
                                                newLevels2Array[index] = newLevels2;
                                                setLevels2Array(newLevels2Array);
                                            }}
                                            levels2={levels2Array[index]}
                                            moveLevel2={(index, direction) => moveLevel2(index, direction)}

                                            />
                                    </>

                                    <>
                                        <TextBoxInputLevel3
                                            isAddVideoVisible={isAddVideoVisibleArray[index]}
                                            setIsAddVideoVisible={() => toggleAddVideoVisibility(index)}
                                            textBottonVideo={textBottonVideo }
                                            labelInput3={labelInput3}
                                            TextLevelBox3={TextLevelBox3}
                                            status={status}
                                            errorMessage={errorMessage}
                                            setLevels3={(newLevels3) => {
                                                const newLevels3Array = [...levels3Array];
                                                newLevels3Array[index] = newLevels3;
                                                setLevels3Array(newLevels3Array);
                                            }}
                                            levels3={levels3Array[index]}
                                            
                                            />
                                    </>
                 
                                    <TextBoxS>{level.Text}</TextBoxS>
                                    <ButtonContainer>
                                        <ButtonLevel2
                                            onClick={() => addLevel2(index)}>{buttonLevel2}
                                        </ButtonLevel2>
                              
                                        <ButtonLevel3
                                            isActive={isLevel3ActiveArray[index]} onClick={() => addLevel3(index)}>{buttonLevel3}
                                        </ButtonLevel3>
                                    </ButtonContainer>
                                    </>)
                            }
                            <IconBox iconPosition={iconPositions[index]}
                                    iconTransform={iconTransforms[index]}>
                                <ButtonSymbol
                                    ifSymbol={ifSymbol}>
                                </ButtonSymbol>
                            </IconBox>
                        </CentralBox>
                    </MainBox>
                );
            })}
            <ButtonLevel onClick={addLevel}>{buttonGlobal}</ButtonLevel>
        </>
  );
}

export default Component;