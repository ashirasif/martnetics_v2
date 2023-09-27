import { useSpring, a, config } from "@react-spring/three";
import {
  CameraControls,
  Float,
  Html,
  PerspectiveCamera,
  Sparkles,
  useProgress,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useEffect, useRef, useState } from "react";
import { Color } from "three";

import Frames from "~/components/3d/Frames";
import Watch from "~/components/3d/Watch";
import Testimony from "./testimony";

function Perm({ handleState }: { handleState: (s: boolean) => void }) {
  useEffect(() => {
    return () => {
      console.log("Perm unmounted");
      handleState(true);
    };
  }, []);

  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black text-8xl font-black text-blue-300">
        {Math.floor(progress)}
      </div>
    </Html>
  );
}

export const Scene = ({
  m,
  isMobile,
  currentPage,
  handleState,
}: {
  m: number;
  isMobile: boolean;
  currentPage: number;
  handleState: (s: boolean) => void;
}) => {
  const pages = useRef<number>(10);
  const camRef = useRef(null);
  const cameraPosition = {
    1: [0, 0, 10],
    2: [0, 0, 100],
    3: [0, 0, 50],
    4: [0, 0, -90],
    5: [0, 0, -90],
    6: [0, 0, -90],
    7: [0, 0, -90],
    8: [0, 0, -90],
    9: [0, 0, -90],
    10: [0, 0, -90],
  };

  useFrame((state, dt) => {
    if (
      state.camera.position.toArray() !=
      cameraPosition[currentPage as keyof typeof cameraPosition]
    ) {
      easing.damp3(
        state.camera.position,
        [
          cameraPosition[currentPage as keyof typeof cameraPosition][0]!,
          cameraPosition[currentPage as keyof typeof cameraPosition][1]!,
          cameraPosition[currentPage as keyof typeof cameraPosition][2]!,
        ],
        0.4,
        dt,
      );
      state.camera.updateProjectionMatrix();
    }
  });

  return (
    <Suspense fallback={<Perm handleState={handleState} />}>
      <PerspectiveCamera
        fov={140}
        makeDefault
        position={[0, 0, 100]}
        ref={camRef}
      />
      <Float rotationIntensity={0}>
        <Sparkles speed={2} size={50} scale={1000} />
      </Float>
      <Frames start={0} end={1 / pages.current} prog={m} />
      <Watch
        start={3 / pages.current}
        end={4 / pages.current}
        prog={m}
        position={[0, 0, -100]}
        isMobile={isMobile}
      />
      <Testimony start={4} end={5} prog={m} position={[0, -100, 0]} isMobile={isMobile}/>
    </Suspense>
  );
};
