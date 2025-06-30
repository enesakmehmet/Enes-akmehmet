import Particles from "@tsparticles/react";

export default function AnimatedBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true
            }
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0.4
          },
          size: {
            value: { min: 1, max: 3 }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.25,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: {
              default: "bounce"
            }
          }
        },
        detectRetina: true,
        background: {
          color: {
            value: "transparent"
          }
        }
      }}
    />
  );
}
