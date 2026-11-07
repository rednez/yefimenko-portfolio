'use client';

import { PointerEvent, useCallback, useEffect, useRef } from 'react';

/**
 * Returns a pointermove handler that exposes the mouse position relative to
 * the element as `--mx` / `--my` CSS variables, coalesced to one write per frame.
 */
export function useCursorVars<T extends HTMLElement>() {
  const frame = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    },
    [],
  );

  return useCallback((e: PointerEvent<T>) => {
    if (e.pointerType !== 'mouse') return;
    pos.current = { x: e.clientX, y: e.clientY };
    if (frame.current) return;

    const el = e.currentTarget;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${pos.current.x - rect.left}px`);
      el.style.setProperty('--my', `${pos.current.y - rect.top}px`);
    });
  }, []);
}
