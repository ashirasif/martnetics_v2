import { CameraShake, useEnvironment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef } from "react";
import { Color, Group, Mesh } from "three";

function IntroText3d({
  start,
  end,
  prog,
  position,
  isMobile,
}: {
  start: number;
  end: number;
  prog: number;
  position: [number, number, number];
  isMobile: boolean;
}) {
  const globalRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const coords = useRef({ x: 0, y: 0 });
  const color = new Color();
  const hdr = useEnvironment({ preset: "studio" });

  useEffect(() => {
    if (prog >= (start + end) / 2) {
      // @ts-ignore
      meshRef.current!.material.color = color.set("#ffe033");
    } else {
      // @ts-ignore
      meshRef.current!.material.color = color.set("#ff8ce6");
    }
  }, [prog]);

  useFrame((state, dt) => {
    if (prog >= start && prog < end) {
      if (!globalRef.current?.visible) {
        globalRef.current!.visible = true;
        state.scene.environment = hdr;
      }
      const a = state.clock.getElapsedTime();
      meshRef.current!.rotation.set(a, a, a);
      easing.damp3(
        meshRef.current!.position,
        [
          coords.current.x * 10,
          -coords.current.y * 10,
          prog >= (start + end) / 2 ? -50 : 0,
        ],
        0.4,
        dt,
      );
    } else {
      if (globalRef.current?.visible) {
        globalRef.current!.visible = false;
      }
    }
  });

  // pointer move event for camera lookat
  useEffect(() => {
    const pmHandle = (e: any) => {
      coords.current.x =
        (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      coords.current.y =
        (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };
    window.addEventListener("pointermove", pmHandle);
    return () => window.removeEventListener("pointermove", pmHandle);
  }, []);
  return (
    <>
      <group ref={globalRef} position={position}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[6, 0]} />
          <meshStandardMaterial
            color={"#4c80d4"}
            metalness={1}
            roughness={0.2}
          />
        </mesh>
      </group>
    </>
  );
}

export default IntroText3d;
