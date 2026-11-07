import { describe, expect, it } from 'vitest';
import { EASE_OUT_EXPO, fadeUp } from './fade-up';

describe('fadeUp', () => {
  it('builds an opacity + transform transition with no delay by default', () => {
    expect(fadeUp()).toEqual({
      transition: `opacity 0.6s ${EASE_OUT_EXPO} 0s, transform 0.6s ${EASE_OUT_EXPO} 0s`,
    });
  });

  it('applies the given delay to both properties', () => {
    const { transition } = fadeUp('0.45s');
    expect(transition.match(/0\.45s/g)).toHaveLength(2);
  });
});
