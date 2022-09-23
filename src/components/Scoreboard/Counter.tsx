import styled from '@emotion/styled';

interface Props {
  /**
   * Number in the counter
   */
  children: string;
}

export const Counter = ({ children }: Props) => {
  return <Frame>{children}</Frame>;
};

const Frame = styled.div`
  --frame-color: #ec433c;
  display: inline-block;
  padding: 0 0.3vw;
  color: var(--frame-color);
  border: 0.15vw inset var(--frame-color);
  background-color: #333;
  line-height: 2vw;
  letter-spacing: 0.08em;
  text-shadow: 0 0 0.1vw currentColor;
  user-select: none;
`;
