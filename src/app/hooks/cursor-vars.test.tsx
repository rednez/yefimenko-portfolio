import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useCursorVars } from './cursor-vars';

function Probe() {
  const onPointerMove = useCursorVars<HTMLDivElement>();
  return <div data-testid="probe" onPointerMove={onPointerMove} />;
}

let frames: FrameRequestCallback[];

beforeEach(() => {
  frames = [];
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
    frames.push(cb);
    return frames.length;
  });
  vi.stubGlobal('cancelAnimationFrame', vi.fn());
});

function renderProbe() {
  render(<Probe />);
  const el = screen.getByTestId('probe');
  vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({
    left: 100,
    top: 50,
  } as DOMRect);
  return el;
}

const flushFrames = () => frames.splice(0).forEach((cb) => cb(0));

describe('useCursorVars', () => {
  it('writes the pointer position relative to the element as CSS vars', () => {
    const el = renderProbe();

    fireEvent.pointerMove(el, {
      pointerType: 'mouse',
      clientX: 130,
      clientY: 90,
    });
    flushFrames();

    expect(el.style.getPropertyValue('--mx')).toBe('30px');
    expect(el.style.getPropertyValue('--my')).toBe('40px');
  });

  it('coalesces moves within a frame and uses the latest position', () => {
    const el = renderProbe();

    fireEvent.pointerMove(el, {
      pointerType: 'mouse',
      clientX: 110,
      clientY: 60,
    });
    fireEvent.pointerMove(el, {
      pointerType: 'mouse',
      clientX: 200,
      clientY: 150,
    });

    expect(frames).toHaveLength(1);
    flushFrames();

    expect(el.style.getPropertyValue('--mx')).toBe('100px');
    expect(el.style.getPropertyValue('--my')).toBe('100px');
  });

  it('ignores non-mouse pointers', () => {
    const el = renderProbe();

    fireEvent.pointerMove(el, {
      pointerType: 'touch',
      clientX: 130,
      clientY: 90,
    });

    expect(frames).toHaveLength(0);
    expect(el.style.getPropertyValue('--mx')).toBe('');
  });

  it('cancels a pending frame on unmount', () => {
    const { unmount } = render(<Probe />);
    fireEvent.pointerMove(screen.getByTestId('probe'), {
      pointerType: 'mouse',
      clientX: 1,
      clientY: 1,
    });

    unmount();
    expect(cancelAnimationFrame).toHaveBeenCalledWith(1);
  });
});
