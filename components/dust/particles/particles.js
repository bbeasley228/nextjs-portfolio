import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import ParticlesConfig from "./particle-config";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div id="particle-background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={ParticlesConfig}
        height="100vh"
        width="100vw"
      ></Particles>
    </div>
  );
};

export default ParticleBackground;
