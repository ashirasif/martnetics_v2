import { useSpring, a } from "@react-spring/three";
import {
  CameraControls,
  Html,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useEffect, useRef, useState } from "react";
import { Color } from "three";

import Frames from "~/components/3d/Frames";
import Watch from "~/components/3d/Watch";

function Perm() {
  // useEffect(() => {
  //   return () => {
  //     handleState(true);
  //   };
  // }, []);

  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black text-8xl font-black text-blue-300">
        {Math.floor(progress)}
      </div>
    </Html>
  );
}

export const Scene = ({ m, isMobile }: { m: number; isMobile: boolean }) => {
  const pages = useRef<number>(8);
  const camRef = useRef(null);

  useFrame((state, dt) => {
    if (m > 1 / pages.current && m < 2 / pages.current) {
      easing.damp(state.camera.position, "z", -90, 0.4, dt);
      state.camera.updateProjectionMatrix();
    } else {
      easing.damp(state.camera.position, "z", 10, 0.4, dt);
      state.camera.updateProjectionMatrix();
    }
  });

  return (
    <Suspense fallback={<Perm />}>
      <PerspectiveCamera
        fov={140}
        position={[0, 0, 10]}
        makeDefault
        ref={camRef}
      />
      <Frames start={0} end={1 / pages.current} prog={m} />
      <Watch
        start={1 / pages.current}
        end={8 / pages.current}
        prog={m}
        position={[0, 0, -100]}
        isMobile={isMobile}
      />
    </Suspense>
  );
};
