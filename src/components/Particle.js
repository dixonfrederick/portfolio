import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{ position: "absolute", zIndex: -1, pointerEvents: "none" }}
      params={{
        particles: {
          number: {
            value: 54,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: "#8d63d2",
          },
          line_linked: {
            enable: true,
            color: "#6f42c1",
            distance: 150,
            opacity: 0.14,
          },
          move: {
            direction: "none",
            enable: true,
            speed: 0.3,
            out_mode: "out",
          },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: 0.16,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.05,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
            },
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.22,
              },
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
