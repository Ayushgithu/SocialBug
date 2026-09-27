"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Nodes({ count = 90 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const radius = 2.4;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      pts.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        )
      );
    }
    return pts;
  }, [count]);

  const lineSegments = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 1.05) {
          positions.push(points[i].x, points[i].y, points[i].z);
          positions.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }
    return new Float32Array(positions);
  }, [points]);

  const nodePositions = useMemo(() => {
    const arr = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [points]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.3,
      0.03
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      groupRef.current.rotation.y + mouse.current.x * 0.001,
      1
    );
  });

  useFrame(({ pointer }) => {
    mouse.current.x = pointer.x;
    mouse.current.y = pointer.y;
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lineSegments, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#ff3d9a" transparent opacity={0.28} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#c6ff3d" size={0.055} sizeAttenuation />
      </points>
    </group>
  );
}

export default function NetworkOrb() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1} />
      <Nodes />
    </Canvas>
  );
}
