import { createEvent, fireEvent, render, screen } from '@testing-library/react';

import { CellState, Coords } from '@/helpers/Field';

import { Cell, CellProps, checkCellIsActive } from './Cell';

describe('Cell component', () => {
  // Default props for all tests
  const coords: Coords = [1, 1];

  // Loop through all Cell types and run tests on each
  for (let cell = CellState.empty; cell <= CellState.weakFlag; cell++) {
    it(`Check context menu preventDefault works for every cell type - ${cell}`, () => {
      const props: CellProps = {
        children: cell,
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      };

      render(<Cell {...props}>{cell}</Cell>);

      const cellComponent = screen.getByTestId(`${cell}_${coords}`);

      // const isDefaultPrevented = fireEvent.contextMenu(cellComponent);
      // expect(isDefaultPrevented).toBe(false);

      const contextMenuEvent = createEvent.contextMenu(cellComponent);
      fireEvent(cellComponent, contextMenuEvent);
      expect(contextMenuEvent.defaultPrevented).toBe(true);
    });

    it(`onClick and onContextMenu handlers should only be called for active cells - ${cell}`, () => {
      const props: CellProps = {
        children: cell,
        coords,
        onClick: jest.fn(),
        onContextMenu: jest.fn(),
      };

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
