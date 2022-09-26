import styled from '@emotion/styled';

import { Coords, Field } from '@/helpers/Field';

import { Cell } from './Cell';

interface GridProps {
  /**
   * Field data
   */
  children: Field;
  /**
   * onClick handler
   */
  onClick: (coords: Coords) => void;
  /**
   * onContextMenu handler
   */
  onContextMenu: (coords: Coords) => void;
}

export const Grid = ({ children, ...rest }: GridProps) => {
  return (
    <Wrapper size={children.length}>
      {children.map((row, y) =>
        row.map((cell, x) => (
          <Cell coords={[y, x]} {...rest} key={`${y}_${x}_${cell}`}>
            {cell}
          </Cell>
        ))
      )}
    </Wrapper>
  );
};

/* =============================================
              STYLED-COMPONENTS
============================================= */
interface WrapperProps {
  size: number;
}
const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);
  width: max-content;
  padding: 1vw;
`;
