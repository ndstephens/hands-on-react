import { fireEvent, render, screen } from '@testing-library/react';

import { BUTTON_ICON, BUTTON_ICON_MOUSE_DOWN, Reset } from './Reset';

describe('Reset button test', () => {
  const ResetWithDummyHandler = () => <Reset onReset={() => null} />;

  it('Should render elements with default state', () => {
    render(<ResetWithDummyHandler />);

    expect(screen.getByTestId('reset-button')).toBeInTheDocument();
  });

  it('onReset handler should be called', () => {
    const onReset = jest.fn();
    render(<Reset onReset={onReset} />);
    fireEvent.click(screen.getByTestId('reset-button'));

    expect(onReset).toBeCalledTimes(1);
  });

  it('Should change state when onMouseDown and onMouseUp event happen', () => {
    render(<ResetWithDummyHandler />);

    fireEvent.mouseDown(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('reset-button').innerHTML).toContain(
      BUTTON_ICON_MOUSE_DOWN
    );
    fireEvent.mouseUp(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('reset-button').innerHTML).toContain(BUTTON_ICON);
  });

  it('Should change state when onMouseDown and onMouseLeave events happen', () => {
    render(<ResetWithDummyHandler />);

    fireEvent.mouseDown(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('reset-button').innerHTML).toContain(
      BUTTON_ICON_MOUSE_DOWN
    );
    fireEvent.mouseLeave(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('reset-button').innerHTML).toContain(BUTTON_ICON);
  });
});
