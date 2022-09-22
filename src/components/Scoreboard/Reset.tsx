import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  /**
   * Reset action handler
   */
  onReset: () => void;
}

export const Reset = ({ onReset }: Props) => {
  const [mouseDown, setMouseDown] = React.useState(false);

  return (
    <Button
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseLeave={() => setMouseDown(false)}
      onClick={onReset}
    >
      {mouseDown ? '😲' : '😬'}
    </Button>
  );
};

const Button = styled.button`
  font-size: 1.5vw;
  cursor: pointer;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`;
