
import {
  Float,
  Html,
  PerspectiveCamera,
  Sparkles,
  useProgress,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useEffect, useRef } from "react";

import Frames from "~/components/3d/Frames";
import Watch from "~/components/3d/Watch";

import IntroText3d from "./introText3d";

function Perm({ handleState }: { handleState: (s: boolean) => void }) {
  useEffect(() => {
    return () => { 
      handleState(true);
    };
  }, [handleState]);

  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black text-8xl font-black text-white">
        {Math.floor(progress)}%
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
  const pages = useRef<number>(8);
  const camRef = useRef(null);
  const cameraPosition = {
    1: [0, 0, 10],
    2: [100, 0, -90],
    3: [100, 0, -140],
    4: [0, 0.5, -90],
    5: [-2, 0.5, -93],
    6: [0, 0, 100],
    7: [0, 0, 50],
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
        position={[0, 0, 50]}
        ref={camRef}
      />
      <Frames start={0} end={1 / pages.current} prog={m} />
      <IntroText3d
        start={1 / pages.current}
        end={3 / pages.current}
        prog={m}
        position={[100, 0, -100]}
        isMobile={isMobile}
      />
      <Watch
        start={3 / pages.current}
        end={5 / pages.current}
        prog={m}
        position={[0, 0, -100]}
        isMobile={isMobile}
        currentPage={currentPage}
      />
      <Float>
        <Sparkles noise={0} size={50} scale={1000} />
      </Float>
    </Suspense>
  );
};
