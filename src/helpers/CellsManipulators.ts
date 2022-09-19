import { Cell, CellState, Coords, Field } from './Field';

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

export const checkItemInField = ([y, x]: Coords, field: Field): boolean => {
  if (y < 0 || y >= field.length || x < 0 || x >= field.length) {
    return false;
  }
  return true;
};

export const incrementNeighbors = (coords: Coords, field: Field): Field => {
  const neighbors = getNeighborItems(coords);

  Object.values(neighbors).forEach(([y, x]) => {
    // verify it's within the field coords and also not a bomb (nor can become a bomb)
    if (checkItemInField([y, x], field) && field[y][x] < CellState.bomb - 1) {
      field[y][x] = (field[y][x] + 1) as Cell;
    }
  });

  return field;
};
