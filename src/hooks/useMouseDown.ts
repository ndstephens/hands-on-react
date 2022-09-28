import * as React from 'react';

type SetMouseDownStatus = () => void;
type SetMouseUpStatus = () => void;

export const useMouseDown = (): [
  boolean,
  SetMouseDownStatus,
  SetMouseUpStatus
] => {
  const [mouseDown, setMouseDown] = React.useState(false);

  // Stryker disable next-line all
  React.useDebugValue(`mouseDown: ${mouseDown}`);

  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);

  return [mouseDown, onMouseDown, onMouseUp];
};
