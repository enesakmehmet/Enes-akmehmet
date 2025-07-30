import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

export const useKonamiCode = () => {
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    let inputSequence: string[] = [];

    const handleKeyDown = (event: KeyboardEvent) => {
      inputSequence.push(event.code);

      if (inputSequence.length > KONAMI_CODE.length) {
        inputSequence.shift();
      }

      const isMatch = inputSequence.every((key, i) => key === KONAMI_CODE[i]);
      if (isMatch) {
        setIsActivated(true);
        inputSequence = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const resetActivation = () => {
    setIsActivated(false);
  };

  return { isActivated, resetActivation };
};
