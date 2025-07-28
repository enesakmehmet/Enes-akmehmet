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
  'KeyA'
];

export const useKonamiCode = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setSequence(prev => {
        const newSequence = [...prev, event.code];
        
        // Sadece son 10 tuşu tut
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }
        
        // Konami kodu kontrolü
        if (newSequence.length === KONAMI_CODE.length) {
          const isMatch = newSequence.every((key, index) => key === KONAMI_CODE[index]);
          if (isMatch) {
            setIsActivated(true);
            // Sequence'i sıfırla
            return [];
          }
        }
        
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const resetActivation = () => {
    setIsActivated(false);
    setSequence([]);
  };

  return { isActivated, resetActivation };
};