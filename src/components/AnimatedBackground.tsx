import Particles from "@tsparticles/react";

interface AnimatedBackgroundProps {
  theme: string;
}

export default function AnimatedBackground({ theme }: AnimatedBackgroundProps) {
  // Respect reduced motion and mobile devices to improve performance
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;
  if (prefersReduced || isMobile) {
    return null;
  }
  let linkColor = "#ffffff";
  let gradientColors = ["#6c63ff", "#00adb5", "#ff6584", "#2563eb", "#a21caf"];

  if (theme === "dark") {
    linkColor = "#00adb5";
    gradientColors = ["#00adb5", "#393e46", "#6c63ff"];
  } else if (theme === "blue") {
    linkColor = "#2563eb";
    gradientColors = ["#2563eb", "#3b82f6", "#60a5fa"];
  } else if (theme === "purple") {
    linkColor = "#a21caf";
    gradientColors = ["#a21caf", "#c026d3", "#f3e8ff"];
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: {
            value: 50
            // ✅ density kaldırıldı
          },
          color: {
            value: gradientColors
          },
          shape: {
            type: ["circle", "star"],
            options: {
              star: {
                sides: 5
              }
            }
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false
            }
          },
          size: {
            value: { min: 2, max: 5 },
            animation: {
              enable: true,
              speed: 2,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 120,
            color: linkColor,
            opacity: 0.25,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            outModes: { default: "out" },
            random: true,
            straight: false
          },
          rotate: {
            value: 0,
            animation: { enable: true, speed: 6, sync: false }
          },
          twinkle: {
            particles: {
              enable: true,
              color: "#fff",
              frequency: 0.1,
              opacity: 0.7
            }
          }
        },
        detectRetina: true,
        background: {
          color: { value: "transparent" }
        }
      }}
    />
  );
}
