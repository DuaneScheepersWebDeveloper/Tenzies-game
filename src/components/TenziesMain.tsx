import React, { useState} from 'react';
import Confetti from 'react-confetti';
import { nanoid } from 'nanoid';
import {
  CustomButton,
  TenziesMainStyles,
} from '../styled-components/TenziesStyles';
import DiComponent from './DiComponent';

interface Dice {
  value: number;
  isHeld: boolean;
  id: string;
}

const TenziesMain: React.FC = () => {
  const allNewDice = (): Dice[] => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      newDice.push({ value: randomNumber, isHeld: false, id: nanoid() });
    }
    // console.log(newDice);

    return newDice;
  };

  const randomNumbers = allNewDice();
  const [dice, setDice] = useState<Dice[]>(randomNumbers);
  const [tenzies, setTenzies] = useState(false);

  const resetGame = (): void => {
    setDice(allNewDice());
    setTenzies(false);
  };

  const rollDice = (): void => {
    if (tenzies) {
      resetGame();
    } else {
      setDice((prevDice) => {
        const updatedDice = prevDice.map((die) => {
          if (!die.isHeld) {
            const randomNumber = Math.ceil(Math.random() * 6);
            return { ...die, value: randomNumber };
          }
          return die;
        });
        return updatedDice;
      });
    }
  };

  const holdDice = (id: string): void => {
    setDice((prevDice) => {
      const updatedDice = prevDice.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        }
        return die;
      });
      const allDiceHeld = updatedDice.every((die) => die.isHeld);
      const allDiceSameValue = updatedDice.every(
        (die) => die.value === updatedDice[0].value
      );
      if (allDiceHeld && allDiceSameValue) {
        setTenzies(true);
        console.log('You won!');
      }

      return updatedDice;
    });
  };

  const diceElement = dice.map((die, index) => (
    <DiComponent
      isHeld={die.isHeld}
      key={index}
      value={die.value.toString()}
      onClick={() => holdDice(die.id)}
    />
  ));

  return (
    <TenziesMainStyles>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="di-component-container">
        {diceElement}
        {tenzies && <Confetti />}
      </div>
      <div className="button-container">
        <CustomButton onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </CustomButton>
      </div>
    </TenziesMainStyles>
  );
};

export default TenziesMain;
