import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const GalaxyBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Galaxy generation logic
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 500;
    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      // Random positions for particles
      posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "white",
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Load planet textures and create planets
    const textureLoader = new THREE.TextureLoader();
    const planetTextures = [
      "icons/Mars.png",
      "icons/Jupiter.png",
      "icons/ellipse.png",
    ].map((texture) => textureLoader.load(texture));

    planetTextures.forEach((texture, index) => {
      const geometry = new THREE.SphereGeometry(0.2, 16, 16); // Adjust size and detail as needed
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const planet = new THREE.Mesh(geometry, material);

      // Position the planets differently so they're not all at the same spot
      planet.position.x = (index - 1.5) * 3; // This spreads the planets out along the x-axis
      planet.position.y = Math.cos(index) * 2.5; // A little vertical displacement based on index
      planet.position.z = -6 - index; // Ensures planets are placed at different depths

      scene.add(planet);
    });

    camera.position.z = 2.5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleWindowResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleWindowResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height:"100%",
      }}
    />
  );
};

export default GalaxyBackground;
