import { Cell, CellState, Coords, Field } from './Field';

// Get all coordinates of a Cell's 8 surrounding neighbors
export const getNeighborItems = ([y, x]: Coords): Record<string, Coords> => {
  return {
    top: [y - 1, x],
    topRight: [y - 1, x + 1],
    right: [y, x + 1],
    bottomRight: [y + 1, x + 1],
    bottom: [y + 1, x],
    bottomLeft: [y + 1, x - 1],
    left: [y, x - 1],
    topLeft: [y - 1, x - 1],
  };
};

// Check that a Cell is actually in the field (aka on the board)
export const checkItemInField = ([y, x]: Coords, field: Field): boolean => {
  if (y < 0 || y >= field.length || x < 0 || x >= field.length) {
    return false;
  }
  return true;
};

// Increment all of a Cell's (non-bomb) neighbor's values by 1
// Use to indicate number of bombs surrounding a Cell
export const incrementNeighbors = (coords: Coords, field: Field): Field => {
  const neighbors = getNeighborItems(coords);

  Object.values(neighbors).forEach(([y, x]) => {
    // verify it's within the field coords and also not a bomb (nor can become a bomb)
    if (checkItemInField([y, x], field) && field[y]![x]! < CellState.bomb - 1) {
      field[y]![x] = (field[y]![x]! + 1) as Cell;
    }
  });

  return field;
};
