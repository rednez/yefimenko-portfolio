export const fadeUp = (visible: boolean, delay: string = '0s') => ({
  transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}`,
});
