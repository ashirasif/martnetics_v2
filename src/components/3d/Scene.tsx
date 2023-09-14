import { Html, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useEffect, useRef, useState } from "react";
import { Color, MathUtils } from "three";
import Frames from "~/components/3d/Frames";
import Watch from "~/components/3d/Watch";

function Perm() {
  // useEffect(() => {
  //   return () => {
  //     handleState(true);
  //   };
  // }, []);

  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Html center>
      <div className="bg-primary flex h-screen w-screen flex-col items-center justify-center overflow-hidden text-8xl font-black text-black">
        {Math.floor(progress)}
      </div>
    </Html>
  );
}

export const Scene = () => {
  const pages = useRef<number>(8);
  const [m, setM] = useState<number>(0.002);
  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (m + Math.sign(e.deltaY) / 100 > 0.002) {
        console.log(m + Math.sign(e.deltaY) / 100);
        setM(m + Math.sign(e.deltaY) / 50);
      }
    });
  });

  const bgRef = useRef<Color>();
  useFrame((state, dt) => {
    if (m > 0.15 && m < 0.3) {
      easing.damp(state.camera.position, "z", -90, 0.4, dt);
      
      state.camera.updateProjectionMatrix();
    } else {
      easing.damp(state.camera.position, "z", 10, 0.4, dt);
      
      state.camera.updateProjectionMatrix();
    }
  });
  return (
    <Suspense fallback={<Perm />}>
      <color ref={bgRef} attach={"background"} args={["#000000"]} />
      <Frames start={0} end={1.2 / pages.current} prog={m} />
      <Watch
        start={1.2 / pages.current}
        end={9 / pages.current}
        prog={m}
        position={[0, 0, -100]}
      />
    </Suspense>
  );
};
