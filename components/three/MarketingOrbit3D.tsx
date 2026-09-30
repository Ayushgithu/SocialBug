"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = ["#ff3d9a", "#ff5a1f", "#c6ff3d", "#3d7bff", "#9b3dff"];

function FloatingShape({
  position,
  color,
  shape,
  speed,
  offset,
}: {
  position: [number, number, number];
  color: string;
  shape: "box" | "icosahedron" | "torus" | "octahedron";
  speed: number;
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * speed * 0.4;
    ref.current.rotation.y = t * speed * 0.6;
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.35;
  });

  return (
    <mesh ref={ref} position={position}>
      {shape === "box" && <boxGeometry args={[0.7, 0.7, 0.7]} />}
      {shape === "icosahedron" && <icosahedronGeometry args={[0.55, 0]} />}
      {shape === "torus" && <torusGeometry args={[0.45, 0.16, 16, 32]} />}
      {shape === "octahedron" && <octahedronGeometry args={[0.6, 0]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        roughness={0.25}
        metalness={0.35}
      />
    </mesh>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const shapes = useMemo(
    () =>
      [
        { position: [-1.6, 0.6, 0] as [number, number, number], shape: "icosahedron" as const, speed: 0.6, offset: 0 },
        { position: [1.5, -0.4, -0.6] as [number, number, number], shape: "torus" as const, speed: 0.5, offset: 0.8 },
        { position: [0, 1.2, -1] as [number, number, number], shape: "box" as const, speed: 0.7, offset: 1.6 },
        { position: [-0.9, -1.1, 0.4] as [number, number, number], shape: "octahedron" as const, speed: 0.55, offset: 2.4 },
        { position: [1.3, 1.1, 0.5] as [number, number, number], shape: "box" as const, speed: 0.45, offset: 3.2 },
        { position: [0.2, -1.4, -0.3] as [number, number, number], shape: "icosahedron" as const, speed: 0.65, offset: 4 },
      ],
    []
  );

  useFrame(({ pointer }) => {
    mouse.current.x = pointer.x;
    mouse.current.y = pointer.y;
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.4,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.2,
      0.03
    );
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} color={COLORS[i % COLORS.length]} />
      ))}
    </group>
  );
}

export default function MarketingOrbit3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 3]} intensity={40} color="#ff3d9a" />
      <pointLight position={[-3, -2, 2]} intensity={30} color="#3d7bff" />
      <Scene />
    </Canvas>
  );
}
