import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useIntersection } from './intersections';

type Callback = (entries: Partial<IntersectionObserverEntry>[]) => void;

function setupObserver() {
  const observers: {
    callback: Callback;
    options?: IntersectionObserverInit;
  }[] = [];
  const observe = vi.fn();
  const disconnect = vi.fn();

  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: Callback, options?: IntersectionObserverInit) {
        observers.push({ callback, options });
      }
      observe = observe;
      disconnect = disconnect;
      unobserve() {}
    },
  );

  return { observers, observe, disconnect };
}

function Probe({ threshold }: { threshold?: number }) {
  const [ref, visible] = useIntersection<HTMLDivElement>(threshold);
  return (
    <div ref={ref} data-testid="probe">
      {visible ? 'visible' : 'hidden'}
    </div>
  );
}

describe('useIntersection', () => {
  it('observes the element with the default threshold', () => {
    const { observers, observe } = setupObserver();
    render(<Probe />);

    expect(observe).toHaveBeenCalledWith(screen.getByTestId('probe'));
    expect(observers[0].options).toEqual({ threshold: 0.15 });
  });

  it('becomes visible once the element intersects and stays visible', () => {
    const { observers } = setupObserver();
    render(<Probe threshold={0.5} />);
    const probe = screen.getByTestId('probe');

    expect(probe).toHaveTextContent('hidden');

    act(() => observers[0].callback([{ isIntersecting: false }]));
    expect(probe).toHaveTextContent('hidden');

    act(() => observers[0].callback([{ isIntersecting: true }]));
    expect(probe).toHaveTextContent('visible');

    act(() => observers[0].callback([{ isIntersecting: false }]));
    expect(probe).toHaveTextContent('visible');
  });

  it('disconnects the observer on unmount', () => {
    const { disconnect } = setupObserver();
    const { unmount } = render(<Probe />);

    unmount();
    expect(disconnect).toHaveBeenCalled();
  });
});
