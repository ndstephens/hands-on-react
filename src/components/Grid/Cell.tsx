import styled from '@emotion/styled';

import { Cell as CellType, CellState, Coords } from '@/helpers/Field';
import { useMouseDown } from '@/hooks/useMouseDown';

export interface CellProps {
  /**
   * Cell status...number between 0 and 12
   */
  children: CellType;
  /**
   * Cell coordinates
   */
  coords: Coords;
  /**
   * onClick Cell handler
   */
  onClick: (coords: Coords) => void;
  /**
   * onContextMenu Cell handler
   */
  onContextMenu: (coords: Coords) => void;
}

export const Cell = ({ children, coords, ...restProps }: CellProps) => {
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown();

  const onClick = () => restProps.onClick(coords);

  const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (checkCellIsActive(children)) {
      restProps.onContextMenu(coords);
    }
  };

  const props = {
    onClick,
    onContextMenu,
    onMouseDown,
    onMouseUp,
    onMouseLeave: onMouseUp,
    mouseDown,
    'data-testid': `${children}_${coords}`,
  };

  return <CellComponent {...props}>{children}</CellComponent>;
};

/* =============================================
              UTILITY FUNCTIONS
============================================= */
export const checkCellIsActive = (cell: CellType): boolean => {
  return [CellState.hidden, CellState.flag, CellState.weakFlag].includes(cell);
};

/* =============================================
                CELL COMPONENT
============================================= */
interface CellComponentProps {
  children: CellType;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  mouseDown: boolean;
  'data-testid'?: string;
}
const CellComponent = ({ children, ...restProps }: CellComponentProps) => {
  const nonActiveCellProps = {
    onContextMenu: restProps.onContextMenu,
    'data-testid': restProps['data-testid'],
  };

  switch (children) {
    case CellState.empty:
      return <EmptyFrame {...nonActiveCellProps} />;
    case CellState.bomb:
      return (
        <BombFrame {...nonActiveCellProps}>
          <Bomb />
        </BombFrame>
      );
    case CellState.hidden:
      return <ClosedFrame {...restProps} />;
    case CellState.flag:
      return (
        <ClosedFrame {...restProps}>
          <Flag />
        </ClosedFrame>
      );
    case CellState.weakFlag:
      return (
        <ClosedFrame {...restProps}>
          <WeakFlag />
        </ClosedFrame>
      );
    default:
      return <RevealedFrame {...nonActiveCellProps}>{children}</RevealedFrame>;
  }
};

/* =============================================
            STYLED-COMPONENTS
============================================= */
interface ClosedFrameProps {
  mouseDown?: boolean;
}

const ClosedFrame = styled.div<ClosedFrameProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  background-color: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: ${({ mouseDown = false }) =>
    mouseDown ? 'transparent' : ' white #9e9e9e #9e9e9e white'};

  &:hover {
    filter: brightness(1.1);
  }
`;

const EmptyFrame = styled(ClosedFrame)`
  border-color: #ddd;
  cursor: default;

  &:hover {
    filter: brightness(1);
  }
`;

const BombFrame = styled(EmptyFrame)`
  background-color: #ec433c;
`;

const Bomb = styled.div`
  border-radius: 50%;
  width: 60%;
  height: 60%;
  background-color: #333;
`;

const Flag = styled.div`
  width: 0;
  height: 0;
  border-top: 0.5vw solid transparent;
  border-bottom: 0.5vw solid transparent;
  border-left: 0.5vw solid #ec433c;
`;

const WeakFlag = styled(Flag)`
  border-left-color: #f19996;
`;

const transparent = 'rgba(0,0,0,0)';
const colors: { [key in CellType]: string } = {
  0: transparent,
  1: '#2a48ec',
  2: '#2bb13d',
  3: '#ec6561',
  4: '#233db7',
  5: '#a6070f',
  6: '#e400af',
  7: '#906a02',
  8: '#fa0707',
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
};

const RevealedFrame = styled(EmptyFrame)`
  color: ${({ children }) => colors[children as CellType] ?? transparent};
  font-size: 1.2vw;
`;
