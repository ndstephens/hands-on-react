import styled from '@emotion/styled';

export const Legend: React.FC = () => (
  <Parent>
    <strong>flag: </strong>
    <Action>
      <Key>ctrl</Key> + <Click>click</Click>
    </Action>
  </Parent>
);

export default Legend;

const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const Action = styled.code`
  background-color: #e3e3e3;
`;

const Key = styled.span`
  color: #ec433c;
`;

const Click = styled.span`
  color: #2a48ec;
`;
