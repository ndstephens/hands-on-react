import {
  CellState,
  emptyFieldGenerator,
  fieldGenerator,
  PROBABILITY_ERROR_MSG,
} from './Field';

const { empty, bomb, hidden } = CellState;

describe('Field Generator', () => {
  describe('emptyFieldGenerator tests', () => {
    it('2 x 2', () => {
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });

    it('3 x 3', () => {
      expect(emptyFieldGenerator(3)).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]);
    });

    it('3 x 3 with hidden state', () => {
      expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
      ]);
    });
  });

  describe('Simple cases', () => {
    it('Wrong probability', () => {
      expect(() => fieldGenerator(1, -1)).toThrow(PROBABILITY_ERROR_MSG);
      expect(() => fieldGenerator(1, 2)).toThrow(PROBABILITY_ERROR_MSG);
    });

    it('Smallest field without mine', () => {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
    });
    it('Large field without mine', () => {
      expect(fieldGenerator(10, 0)).toStrictEqual([
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
      ]);
    });

    it('Smallest possible field with mine', () => {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
    });
    it('2 x 2 field with 50% probability', () => {
      const field = fieldGenerator(2, 0.5);
      const flattenedField = field.flat();

      // console.table(field);

      const cellsWithBombs = flattenedField.filter((cell) => cell === bomb);
      const cellsWithoutBombs = flattenedField.filter((cell) => cell !== bomb);

      expect(cellsWithBombs).toHaveLength(2);
      expect(cellsWithoutBombs).toHaveLength(2);
    });
    it('Real game field size of 10x10 with 25 dispersed mines', () => {
      const size = 10;
      const mines = 25;
      const probability = mines / (size * size);
      const field = fieldGenerator(size, probability);

      // console.table(field);

      const flattenedField = field.flat();

      // console.log('flattenedField: ', flattenedField);

      // have number of mines we expect
      expect(flattenedField.filter((cell) => cell === bomb)).toHaveLength(
        mines
      );

      // make sure mines aren't all packed together at the start of the field
      expect([...field[0]!].join('')).not.toBe(
        new Array(size).fill(9).join('')
      );
    });
  });
});
