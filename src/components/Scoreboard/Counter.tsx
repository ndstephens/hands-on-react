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
  display: inline-block;
  padding: 0 0.3vw;
  color: #ec433c;
  border: 0.15vw inset;
  /* line-height: 2vw; */
  line-height: 1.6;
  letter-spacing: 0.08em;
  background-color: #333;
  text-shadow: 0 0 0.1vw currentColor;
`;
