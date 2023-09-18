import { useSpring } from "@react-spring/three";
import { CameraControls, Html, PerspectiveCamera, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useEffect, useRef, useState } from "react";

import Frames from "~/components/3d/Frames";
import Watch from "~/components/3d/Watch";

function Perm() {
  // useEffect(() => {
  //   return () => {
  //     handleState(true);
  //   };
  // }, []);

  const {progress} = useProgress();

  return (
    <Html center>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-primary text-8xl font-black text-black">
        {Math.floor(progress)}
      </div>
    </Html>
  );
}

export const Scene = () => {
  const pages = useRef<number>(8);
  const [m, setM] = useState<number>(0.002);
  const camRef = useRef(null);
  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (m + Math.sign(e.deltaY) / 100 > 0.002) {
        setM(m + Math.sign(e.deltaY) / 50);
      }
    });
  });

  useFrame((state, dt) => {
    if (m > 0.15 && m < 0.3) {
      easing.damp(state.camera.position, "z", -90, 0.4, dt);
      easing.damp(state.camera.position, "x", -10, 0.4, dt);
      state.camera.updateProjectionMatrix();
    } else {
      easing.damp(state.camera.position, "z", 10, 0.4, dt);
      easing.damp(state.camera.position, "x", 0, 0.4, dt);
      state.camera.updateProjectionMatrix();
    }
  });

  return (
    <Suspense fallback={<Perm />}>
      <color attach={"background"} args={["#000000"]} />
      <PerspectiveCamera
        fov={140}
        position={[0,0,10]}
        makeDefault
        ref={camRef}
      />
      <Frames start={0} end={1.2 / pages.current} prog={m} />
      <Watch
        start={1.2 / pages.current}
        end={2 / pages.current}
        prog={m}
        position={[-10, 0, -100]}
      />
    </Suspense>
  );
};
