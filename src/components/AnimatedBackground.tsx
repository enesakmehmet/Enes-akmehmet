import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true
              // V3 API'de başka property YOK
            }
          },
          color: {
            value: '#ffffff'
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.5
            }
            // random yok artık
          },
          size: {
            value: {
              min: 1,
              max: 3
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.25,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outModes: {
              default: 'bounce'
            }
          }
        },
        detectRetina: true,
        background: {
          color: {
            value: 'transparent'
          }
        }
      }}
    />
  );
}
