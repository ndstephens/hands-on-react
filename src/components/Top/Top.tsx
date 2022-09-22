import styled from '@emotion/styled';

import { GameName, GameNameProps } from './GameName';
import { Legend, LegendProps } from './Legend';

export const Top: React.FC<GameNameProps & LegendProps> = ({
  name,
  ...legendProps
}) => (
  <Header>
    <GameName name={name} />
    <Legend {...legendProps} />
  </Header>
);

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`;