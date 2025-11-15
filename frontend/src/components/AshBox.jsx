"use client";

import { useState, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function AshBox({ children, delay = 0 }) {
  const [stage, setStage] = useState("ash"); // "ash" → "forming" → "box"
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => setInit(true));

    setTimeout(() => {
      setStage("forming");
    }, delay + 1200);

    setTimeout(() => {
      setStage("box");
    }, delay + 2600);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* === Stage 1: Ash Particles === */}
      {stage !== "box" && init && (
        <Particles
          id="ashParticles"
          options={{
            fullScreen: false,
            background: { color: "transparent" },
            particles: {
              number: { value: stage === "ash" ? 150 : 60 },
              color: { value: "#aaa" },
              move: {
                enable: true,
                speed: stage === "ash" ? 2 : 6,
                direction: stage === "ash" ? "bottom" : "none",
                straight: false,
                outModes: { default: "destroy" },
                attract: {
                  enable: stage === "forming",
                  rotate: { x: 600, y: 1200 },
                },
              },
              opacity: { value: 0.7 },
              size: { value: { min: 1, max: 3 } },
            },
          }}
          className="absolute inset-0"
        />
      )}

      {/* === Stage 3: Final Reassembled Box === */}
      {stage === "box" && (
        <div className="animate-fade-in scale-100 opacity-100 transition-all duration-700">
          {children}
        </div>
      )}
    </div>
  );
}
