import { act, renderHook } from '@testing-library/react';

import { useMouseDown } from './useMouseDown';

describe('useMouseDown hook test', () => {
  it('Should toggle state after onMouseDown/onMouseup calls', () => {
    const { result } = renderHook(useMouseDown);

    const [mouseDown, onMouseDown, onMouseUp] = result.current;

    // default state
    expect(mouseDown).toBe(false);

    act(onMouseDown);
    expect(result.current[0]).toBe(true); // can't just check "mouseDown"

    act(onMouseUp);
    expect(result.current[0]).toBe(false); // can't just check "mouseDown"

    act(onMouseDown);
    expect(result.current[0]).toBe(true); // can't just check "mouseDown"
  });
});
