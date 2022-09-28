import styled from '@emotion/styled';

import { Counter } from './Counter';
import { Level } from './Level';
import { Reset } from './Reset';

export interface ScoreboardProps {
  /**
   * Timer
   */
  time: string;
  /**
   * Possible game scenarios
   */
  levels: string[];
  /**
   * Number of bombs in the field
   */
  mines: string;
  /**
   * Action handler when the GameReset button is clicked
   */
  onReset: () => void;
}

export const Scoreboard = ({
  time,
  levels,
  mines,
  onReset,
}: ScoreboardProps) => {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <Level>{levels}</Level>
      <Reset onReset={onReset} />
      <Counter>{mines}</Counter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2vw;
  width: max-content;
`;
