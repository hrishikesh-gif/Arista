// ModelCanvas.jsx
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

function Model() {
  const modelRef = useRef();
  const mixerRef = useRef();
  const { scene, animations } = useGLTF("demon_bee_full_texture.glb");
  const { clock } = useThree();

  // Animation mixer setup
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
  }, [scene, animations]);

  // SET INITIAL POSITION HERE
  useEffect(() => {
    if (scene) {
      // Set the bee's starting position immediately
      scene.position.set(0.5, -1, 0); // x, y, z
      scene.rotation.set(0, 1.5, 0); // x, y, z rotation
      window.beeModel = scene;
    }
  }, [scene]);

  // Animation loop
  useFrame(() => {
    if (mixerRef.current) {
      mixerRef.current.update(0.02);
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.8} />;
}

const ModelCanvas = () => {
  const [currentSection, setCurrentSection] = useState("banner");

  // Position configurations for different sections
  const arrPositionModel = [
    {
      id: "banner",
      position: { x: 0, y: -1, z: 0 },
      rotation: { x: 0, y: 1.5, z: 0 },
      scale: 0.6, // Normal size
    },
    {
      id: "intro",
      position: { x: -2, y: -1, z: -5 },
      rotation: { x: 0.5, y: 0.5, z: 0 },
      scale: 0.3, // Smaller
    },
    {
      id: "description",
      position: { x: 2, y: -1, z: -5 },
      rotation: { x: 0, y: -0.5, z: 0 },
      scale: 0.3, // Smaller
    },
    {
      id: "contact",
      position: { x: -1.5, y: -1, z: 0 },
      rotation: { x: 0.3, y: 0.5, z: 0 },
      scale: 0.3, // Smaller
    },
  ];

  // Model movement based on scroll
  const modelMove = () => {
    const sections = document.querySelectorAll(".section");
    let newCurrentSection = "banner";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3) {
        newCurrentSection = section.id;
      }
    });

    if (newCurrentSection !== currentSection && window.beeModel) {
      setCurrentSection(newCurrentSection);

      const position_active = arrPositionModel.findIndex(
        (val) => val.id === newCurrentSection
      );

      if (position_active >= 0) {
        const new_coordinates = arrPositionModel[position_active];

        // Animate position
        gsap.to(window.beeModel.position, {
          x: new_coordinates.position.x,
          y: new_coordinates.position.y,
          z: new_coordinates.position.z,
          duration: 3,
          ease: "power1.out",
        });

        // Animate rotation
        gsap.to(window.beeModel.rotation, {
          x: new_coordinates.rotation.x,
          y: new_coordinates.rotation.y,
          z: new_coordinates.rotation.z,
          duration: 3,
          ease: "power1.out",
        });
      }
    }
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.beeModel) {
        modelMove();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      // Canvas will auto-resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="container3D"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 100,
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 13],
          fov: 10,
          near: 0.1,
          far: 1000,
        }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={1.3} color={0xffffff} />
        <directionalLight
          intensity={1}
          color={0xffffff}
          position={[500, 500, 500]}
        />
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
