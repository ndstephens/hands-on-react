import * as React from 'react';
import styled from '@emotion/styled';

export const BUTTON_ICON = '😬';
export const BUTTON_ICON_MOUSE_DOWN = '😲';

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
      data-testid="reset-button"
    >
      {mouseDown ? BUTTON_ICON_MOUSE_DOWN : BUTTON_ICON}
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  font-size: 1.5vw;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  border-color: white #9e9e9e #9e9e9e white;
  background-color: #d1d1d1;

  &:active {
    border-color: #9e9e9e white white #9e9e9e;
  }
`;
