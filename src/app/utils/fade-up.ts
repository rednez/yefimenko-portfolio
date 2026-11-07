export const EASE_OUT_EXPO = 'cubic-bezier(.22,1,.36,1)';

export const fadeUp = (delay: string = '0s') => ({
  transition: `opacity 0.6s ${EASE_OUT_EXPO} ${delay}, transform 0.6s ${EASE_OUT_EXPO} ${delay}`,
});
