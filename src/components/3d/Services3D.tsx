import { Float, Text, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Services3DProps {
  start: number;
  end: number;
  prog: number;
  position: [number, number, number];
  isMobile: boolean;
  currentPage: number;
}

function ServiceIcon({
  position,
  icon,
  color,
  isActive
}: {
  position: [number, number, number];
  icon: string;
  color: string;
  isActive: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      const scale = isActive ? (hovered ? 1.2 : 1.1) : (hovered ? 0.8 : 0.7);
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isActive ? 0.3 : 0.1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Service Icon Text */}
      <Text
        position={[position[0], position[1] - 1.5, position[2]]}
        fontSize={0.8}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {icon}
      </Text>
    </Float>
  );
}

export default function Services3D({
  start,
  end,
  prog,
  position,
  isMobile,
  currentPage
}: Services3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const scroll = useScroll();
  const [visible, setVisible] = useState(false);

  const services = [
    { icon: "<>", color: "#3b82f6", name: "Full Stack" },
    { icon: "UI", color: "#ec4899", name: "UI/UX" },
    { icon: "M", color: "#10b981", name: "Mobile" },
    { icon: "AI", color: "#8b5cf6", name: "AI" },
    { icon: "3D", color: "#f59e0b", name: "3D Web" }
  ];

  useEffect(() => {
    const range = end - start;
    const currentProgress = (prog - start) / range;
    setVisible(currentProgress > 0 && currentProgress < 1);
  }, [prog, start, end]);

  useFrame((state, dt) => {
    if (groupRef.current) {
      const range = end - start;
      const currentProgress = Math.max(0, Math.min(1, (prog - start) / range));

      // Animate group position based on scroll progress
      const targetY = position[1] + (visible ? 0 : -2);
      easing.damp3(groupRef.current.position, [position[0], targetY, position[2]], 0.3, dt);

      // Animate individual service positions based on cursor
      services.forEach((service, index) => {
        const angle = (index / services.length) * Math.PI * 2;
        const radius = isMobile ? 2 : 3;

        // Add subtle floating animation
        const baseX = Math.cos(angle) * radius;
        const baseZ = Math.sin(angle) * radius;
        const y = Math.sin(index * 0.5 + state.clock.elapsedTime * 0.5) * 0.2;

        // Add cursor-follow effect
        const mouseX = (state.pointer.x / viewport.width) * 2 - 1;
        const mouseY = (state.pointer.y / viewport.height) * 2 - 1;

        const cursorInfluenceX = mouseX * 0.3;
        const cursorInfluenceZ = mouseY * 0.3;

        const x = baseX + cursorInfluenceX;
        const z = baseZ + cursorInfluenceZ;

        if (groupRef.current?.children[index]) { // Update positions
          easing.damp3(groupRef.current.children[index]?.position as THREE.Vector3, [x, y, z], 0.1, dt);
        }
      });
    }
  });

  if (!visible) return null;

  return (
    <group ref={groupRef} position={position}>
      {/* Service Icons in circular arrangement */}
      {services.map((service, index) => {
        const angle = (index / services.length) * Math.PI * 2;
        const radius = isMobile ? 2 : 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <ServiceIcon
            key={service.name}
            position={[x, 0, z]}
            icon={service.icon}
            color={service.color}
            isActive={currentPage === 6}
          />
        );
      })}

      {/* Floating particles for atmosphere */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float
          key={i}
          speed={0.5 + Math.random() * 1.5}
          rotationIntensity={0.1}
          floatIntensity={0.5}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10
            ]}
          >
            <sphereGeometry args={[0.05 + Math.random() * 0.1]} />
            <meshStandardMaterial
              color={services[Math.floor(Math.random() * services.length)]?.color}
              emissive={services[Math.floor(Math.random() * services.length)]?.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}