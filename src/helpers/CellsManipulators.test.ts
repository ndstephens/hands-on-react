import {
  checkItemInField,
  getNeighborItems,
  incrementNeighbors,
} from './CellsManipulators';
import { CellState, emptyFieldGenerator, Field } from './Field';

const { bomb, empty } = CellState;

describe('Check Get Neighbor Items', () => {
  it('With [0,0] coords', () => {
    expect(getNeighborItems([0, 0])).toStrictEqual({
      top: [-1, 0],
      topRight: [-1, 1],
      right: [0, 1],
      bottomRight: [1, 1],
      bottom: [1, 0],
      bottomLeft: [1, -1],
      left: [0, -1],
      topLeft: [-1, -1],
    });
  });
  it('With [3,3] coords', () => {
    expect(getNeighborItems([3, 3])).toStrictEqual({
      top: [2, 3],
      topRight: [2, 4],
      right: [3, 4],
      bottomRight: [4, 4],
      bottom: [4, 3],
      bottomLeft: [4, 2],
      left: [3, 2],
      topLeft: [2, 2],
    });
  });
});

describe('Check coords exist in Field', () => {
  describe('Smallest field', () => {
    const field: Field = [[empty]];

    it('Out of Y range - negative', () => {
      expect(checkItemInField([-1, 0], field)).toBe(false);
    });
    it('Out of Y range - positive', () => {
      expect(checkItemInField([1, 0], field)).toBe(false);
    });
    it('Out of X range - negative', () => {
      expect(checkItemInField([0, -1], field)).toBe(false);
    });
    it('Out of X range - positive', () => {
      expect(checkItemInField([0, 1], field)).toBe(false);
    });
    it('In y and x range', () => {
      expect(checkItemInField([0, 0], field)).toBe(true);
    });
  });
  describe('Larger field', () => {
    const size = 5;
    const field: Field = emptyFieldGenerator(size);

    it('Out of Y range - negative', () => {
      expect(checkItemInField([-1, 0], field)).toBe(false);
    });
    it('Out of Y range - positive', () => {
      expect(checkItemInField([size, 0], field)).toBe(false);
    });
    it('Out of X range - negative', () => {
      expect(checkItemInField([0, -1], field)).toBe(false);
    });
    it('Out of X range - positive', () => {
      expect(checkItemInField([0, size], field)).toBe(false);
    });
    it('In y and x range at [0, 0]', () => {
      expect(checkItemInField([0, 0], field)).toBe(true);
    });
    it('In y and x range [max, max]', () => {
      expect(checkItemInField([size - 1, size - 1], field)).toBe(true);
    });
  });
});

describe('Check Increment Neighbors', () => {
  describe('Simple Cases', () => {
    it('Field with only one item', () => {
      expect(incrementNeighbors([0, 0], [[bomb]])).toStrictEqual([[bomb]]);
    });
    it('Field 2x2 with one mine', () => {
      expect(
        incrementNeighbors(
          [0, 0],
          [
            [bomb, empty],
            [empty, empty],
          ]
        )
      ).toStrictEqual([
        [bomb, empty + 1],
        [empty + 1, empty + 1],
      ]);
    });
  });

  describe('Complex Cases', () => {
    it('Field 2x2 with two mines', () => {
      const field = [
        [bomb, empty],
        [empty, bomb],
      ];
      const roundOne = incrementNeighbors([0, 0], field);
      expect(roundOne).toStrictEqual([
        [bomb, 1],
        [1, bomb],
      ]);

      const roundTwo = incrementNeighbors([1, 1], field);
      expect(roundTwo).toStrictEqual([
        [bomb, 2],
        [2, bomb],
      ]);
    });
  });
});
