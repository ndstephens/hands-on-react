import { incrementNeighbors } from './CellsManipulators';

export const PROBABILITY_ERROR_MSG = 'Probability must be between 0 and 1';

export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Cell[][];
export type Coords = [number, number]; // [y, x]

type CellStateNames = 'empty' | 'bomb' | 'hidden' | 'flag' | 'weakFlag';
type CellState = {
  [key in CellStateNames]: Cell;
};
export const CellState: CellState = {
  empty: 0,
  bomb: 9,
  hidden: 10,
  flag: 11,
  weakFlag: 12,
};

// Create a field with empty cells
export const emptyFieldGenerator = (
  size: number,
  state: Cell = CellState.empty
): Field => {
  return new Array(size).fill(null).map(() => new Array(size).fill(state));
};

// Create a field with a bomb probability (between 0 and 1)
export const fieldGenerator = (size: number, probability: number): Field => {
  if (probability < 0 || probability > 1) {
    throw new Error(PROBABILITY_ERROR_MSG);
  }

  let unprocessedCells = size * size;
  let cellsWithBombs = unprocessedCells * probability;
  const field = emptyFieldGenerator(size);

  if (cellsWithBombs === 0) return field;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (cellsWithBombs / unprocessedCells > Math.random()) {
        field[y]![x] = CellState.bomb;
        incrementNeighbors([y, x], field);
        cellsWithBombs--;
      }
      unprocessedCells--;
    }
  }

  return field;
};
