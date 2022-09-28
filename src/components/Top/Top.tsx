import styled from '@emotion/styled';

import { GameName, GameNameProps } from './GameName';
import { Legend, LegendProps } from './Legend';

export const Top = ({
  children,
  ...legendProps
}: GameNameProps & LegendProps) => (
  <Header>
    <GameName>{children}</GameName>
    <Legend {...legendProps} />
  </Header>
);

const Header = styled.header`
  position: relative;
  display: inline-block;
  text-align: center;
  user-select: none;
`;
