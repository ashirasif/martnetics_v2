import { useSpring } from "@react-spring/three";
import { CameraControls, Html, PerspectiveCamera, useProgress } from "@react-three/drei";
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

  const {progress} = useProgress();

  return (
    <Html center>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-primary text-8xl font-black text-black">
        {Math.floor(progress)}
      </div>
    </Html>
  );
}

export const Scene = ({m}: {m:number}) => {
  const pages = useRef<number>(8);
  
  const camRef = useRef(null);
  const color = new Color(0x000000)
  
  
  useFrame((state, dt) => {
    
    if (m > 0.15 && m < 0.3) {
      easing.damp(state.camera.position, "z", -90, 0.4, dt);
      if (state.camera.position.z >= -80) {
        state.scene.background = color.set("rgb(72, 123, 155)")
      }
      state.camera.updateProjectionMatrix();
    } else {
      easing.damp(state.camera.position, "z", 10, 0.4, dt);
      state.scene.background = color.set("#000000")
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
        position={[0, 0, -100]}
      />
    </Suspense>
  );
};
