import { CameraShake } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

function Testimony({
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

  useFrame((state, dt) => {
    if (prog >= start && prog < end) {
      globalRef.current!.visible = true;
    } else {
      globalRef.current!.visible = false;
    }
  });

  return (
    <>
      <group ref={globalRef} position={position}>
        <mesh>
          <planeGeometry />
          <meshBasicMaterial color={"black"} />
        </mesh>
      </group>
    </>
  );
}

export default Testimony;
