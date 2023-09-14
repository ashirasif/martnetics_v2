import { useSpring } from "@react-spring/three";
import { useGLTF, Clone, Float, Sparkles, Html, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { forwardRef, useRef, useEffect, MutableRefObject } from "react";
import { Mesh, Group } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
};

const FrameModel = forwardRef(function FrameModel(
  props: { x?: number; y?: number; z?: number; total: number },
  cloneRef: any,
) {
  const { nodes } = useGLTF("/frame.gltf") as GLTFResult;
  return (
    <>
      {Array.from({ length: props.total }).map((_, i) => {
        if (cloneRef) {
          return (
            <Clone
              object={nodes.Plane}
              key={i}
              ref={(ref) => {
                cloneRef.current[i] = ref;
              }}
            />
          );
        }
      })}
    </>
  );
});

const Frames = ({
  start,
  end,
  prog,
}: {
  start: number;
  end: number;
  prog: number;
}) => {
  const cloneRef = useRef<Mesh[]>([]);
  const pos = useRef<number[]>([]);
  const frameIndex = useRef<number[]>([]);
  const coords = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const globalRef = useRef<Group>(null);

  useEffect(() => {
    const space = 3;
    let x = (Math.sqrt(cloneRef.current.length) * space) / -2;
    let y = (Math.sqrt(cloneRef.current.length) * space) / -2;
    for (let i = 0; i < cloneRef.current.length; i++) {
      if (i % Math.sqrt(cloneRef.current.length) == 0) {
        y += space;
        x = (-Math.sqrt(cloneRef.current.length) * space) / 2;
      }
      x += space;
      cloneRef.current[i]!.scale.z = Math.random() * (1 - 0.7) + 0.7;
      cloneRef.current[i]!.position.x = x;
      cloneRef.current[i]!.position.y = y;
      cloneRef.current[i]!.position.z = Math.random() * (10 - 1) + 1;
    }
  }, []);

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

  useFrame((state, dt) => {
    if (prog >= start && prog < end) {
      // @ts-ignore
      if (state.camera.fov != 140) {
        // @ts-ignore
        state.camera.fov = 140;
        state.camera.updateProjectionMatrix();
      }
      if (globalRef.current) {
        if (!globalRef.current.visible) {
          globalRef.current.visible = true;
        }
        globalRef.current.rotation.y = coords.current.x * 0.1;
        globalRef.current.rotation.x = coords.current.y * 0.1;
        if (frameIndex.current.length == 0) {
          pos.current.push(Math.random() * 7);
          frameIndex.current.push(
            Math.floor(Math.random() * (cloneRef.current.length - 1) + 1),
          );
        }
        if (frameIndex.current.length != 0) {
          frameIndex.current.map((e, i) => {
            easing.damp(
              cloneRef.current[e]!.position,
              "z",
              pos.current[i]!,
              0.04,
              dt,
            );
            if (cloneRef.current[e]?.position.z == pos.current[i]) {
              frameIndex.current.splice(i, 1);
              pos.current.splice(i, 1);
            }
          });
        }
      }
    } else {
      if (globalRef.current?.visible) {
        globalRef.current.visible = false;
      }
    }
  });

  return (
    <>
      <group ref={globalRef}>
        <Float rotationIntensity={1} speed={1}>
          <FrameModel total={144} ref={cloneRef} />
        </Float>
        <Html fullscreen position={[0, 0, 6]}>
          <div className="selection:bg-primary flex h-screen flex-col items-center justify-center tracking-widest selection:text-black">
            <div className="text-center text-6xl font-black text-blue-200 md:text-8xl 2xl:text-9xl">
              Add Another Dimension
            </div>
            <div className="text-center text-xl font-normal text-blue-200 md:text-3xl">
              With Martnetics
            </div>
          </div>
        </Html>
        <Sparkles speed={2} size={50} scale={1000} />
        <directionalLight
          position={[0, 0, 20]}
          color={"rgb(86, 138, 177)"}
          intensity={2}
        />
      </group>
    </>
  );
};

export default Frames;
