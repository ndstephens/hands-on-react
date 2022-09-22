import styled from '@emotion/styled';

export interface LegendProps {
  /**
   * Feature that should be activated after first & second actions
   */
  feature: string;
  /**
   * First action
   */
  firstAction: string;
  /**
   * Second Action
   */
  secondAction: string;
}

export const Legend: React.FC<LegendProps> = ({
  feature,
  firstAction,
  secondAction,
}) => (
  <Parent>
    <strong>{feature}: </strong>
    <Actions>
      <FirstAction>{firstAction}</FirstAction> +{' '}
      <SecondAction>{secondAction}</SecondAction>
    </Actions>
  </Parent>
);

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const Actions = styled.code`
  background-color: #e3e3e3;
`;

const FirstAction = styled.span`
  color: #ec433c;
`;

const SecondAction = styled.span`
  color: #2a48ec;
`;
