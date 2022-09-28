import { createEvent, fireEvent, render, screen } from '@testing-library/react';

import { CellState, Coords } from '@/helpers/Field';

import { Cell, CellProps, checkCellIsActive, ClosedFrame } from './Cell';

describe('Cell component', () => {
  // Default props for all tests
  const coords: Coords = [1, 1];

  const props: Omit<CellProps, 'children'> = {
    coords,
    onClick: jest.fn(),
    onContextMenu: jest.fn(),
  };

  // Loop through all Cell types and run tests on each
  for (let cell = CellState.empty; cell <= CellState.weakFlag; cell++) {
    it(`Cell renders correctly - Cell: ${cell}`, () => {
      const { asFragment } = render(<Cell {...props}>{cell}</Cell>);

      expect(asFragment()).toMatchSnapshot();
    });

    it('Closed Frame styled-component renders correctly', () => {
      const { asFragment } = render(<ClosedFrame mouseDown={true} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it(`Check context menu preventDefault works for every cell type - Cell: ${cell}`, () => {
      render(<Cell {...props}>{cell}</Cell>);

      const cellComponent = screen.getByTestId(`${cell}_${coords}`);

      // const isDefaultPrevented = fireEvent.contextMenu(cellComponent);
      // expect(isDefaultPrevented).toBe(false);

      const contextMenuEvent = createEvent.contextMenu(cellComponent);
      fireEvent(cellComponent, contextMenuEvent);
      expect(contextMenuEvent.defaultPrevented).toBe(true);
    });

    it(`onClick and onContextMenu handlers should only be called for active cells - Cell: ${cell}`, () => {
      render(<Cell {...props}>{cell}</Cell>);

      const cellComponent = screen.getByTestId(`${cell}_${coords}`);

      fireEvent.click(cellComponent);
      fireEvent.contextMenu(cellComponent);

      if (checkCellIsActive(cell)) {
        expect(props.onClick).toHaveBeenCalledTimes(1);
        expect(props.onContextMenu).toHaveBeenCalledTimes(1);
      } else {
        expect(props.onClick).toHaveBeenCalledTimes(0);
        expect(props.onContextMenu).toHaveBeenCalledTimes(0);
      }
    });
  }
});
