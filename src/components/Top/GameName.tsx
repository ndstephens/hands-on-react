import styled from '@emotion/styled';

export interface GameNameProps {
  /**
   * Text inside the header
   */
  name: string;
}

export const GameName: React.FC<GameNameProps> = ({ name }) => (
  <GameNameHeader>{name}</GameNameHeader>
);

export const GameNameHeader = styled.h1`
  font-size: 2em;
`;
