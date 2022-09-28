import { fireEvent, render, screen } from '@testing-library/react';

import { Reset } from './Reset';

const BUTTON_ICON = '😬';
const BUTTON_ICON_MOUSE_DOWN = '😲';

describe('Reset button test', () => {
  // Default component instance
  const ResetWithDummyHandler = () => <Reset onReset={() => null} />;

  it('Should render correctly', () => {
    const { asFragment } = render(<ResetWithDummyHandler />);

    expect(asFragment()).toMatchSnapshot();
  });

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

    const btn = screen.getByTestId('reset-button');

    fireEvent.mouseDown(btn);
    expect(btn.innerHTML).toBe(BUTTON_ICON_MOUSE_DOWN);
    fireEvent.mouseUp(btn);
    expect(btn.innerHTML).toBe(BUTTON_ICON);
  });

  it('Should change state when onMouseDown and onMouseLeave events happen', () => {
    render(<ResetWithDummyHandler />);

    fireEvent.mouseDown(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('reset-button').innerHTML).toBe(
      BUTTON_ICON_MOUSE_DOWN
    );
    fireEvent.mouseLeave(screen.getByTestId('reset-button'));
    expect(screen.getByTestId('reset-button').innerHTML).toBe(BUTTON_ICON);
  });
});
