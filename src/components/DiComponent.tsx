import React, { FC } from 'react';
import { DiComponentStyles } from '../styled-components/TenziesStyles';

interface DiComponentProps {
  value: string;
  isHeld: boolean;
  onClick?: () => void;
}

const DiComponent: FC<DiComponentProps> = ({ value, isHeld, onClick }) => {
  return (
    <DiComponentStyles isHeld={isHeld} onClick={onClick}>
      <h2>{value}</h2>
    </DiComponentStyles>
  );
};

export default DiComponent;
