import React, { useRef, useState, useEffect } from "react";
import {
  CameraShake,
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  PresentationControls,
  ScreenSpace,
  useEnvironment,
  useGLTF,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useSpring, config, animated } from "@react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    Circle: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
    Circle001: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cube002: THREE.Mesh;
    Circle002: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    Circle003: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Plane003: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshBasicMaterial;
  };
};

function Model(props: {
  position: [x: number, y: number, z: number];
  scale: number;
  isMobile?: boolean;
  currentPage: number;
}) {
  const { nodes, materials } = useGLTF("/watch.gltf") as GLTFResult;
  const spring = useSpring({
    from: {
      rotation: [0, 0, 0],
    },
    to: {
      rotation: [0, 2 * Math.PI, 0],
    },
    loop: true,
    config: { duration: 4000 },
  });

  const [springPage5, api] = useSpring(() => ({
    from: {
      rotation: [0, 0, 0],
    },
    config: config.gentle,
  }));

  useEffect(() => {
    if (props.currentPage == 4) {
      props.isMobile
        ? api.start({
            to: { rotation: [0, 2 * Math.PI, 0] },
            loop: true,
            config: { duration: 4000 },
          })
        : api.start({ to: { rotation: [0, 0, 0] } });
    } else {
      api.start({
        to: { rotation: [-0.1, Math.PI / 8, 0] },
        config: config.wobbly,
      });
    }
  }, [props.currentPage]);

  return (
    <animated.group
      scale={props.scale}
      position={props.position}
      rotation={springPage5.rotation as any}
      dispose={null}
    >
      <mesh castShadow geometry={nodes.Circle.geometry}>
        <meshBasicMaterial color={"#000000"} attach="material" />
      </mesh>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.002"]}
      />
      <mesh geometry={nodes.Circle002.geometry}>
        <meshStandardMaterial
          transparent
          opacity={0.3}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["Material.002"]}
      />
      {/* <mesh geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[-0.004, -0.082, 0]} /> */}
      <mesh
        geometry={nodes.Circle003.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.002"]}
      />
      {/* <mesh geometry={nodes.Plane003.geometry} material={materials['Material.001']} scale={30}/> */}
    </animated.group>
  );
}

useGLTF.preload("/watch.gltf");

export default function Watch({
  start,
  end,
  prog,
  position,
  isMobile,
  currentPage,
}: {
  start: number;
  end: number;
  prog: number;
  position: [number, number, number];
  isMobile: boolean;
  currentPage: number;
}) {
  const globalRef = useRef<THREE.Group>(null);
  const dlRef = useRef<THREE.Group>(null);
  const hdr = useEnvironment({ preset: "studio" });
  const spring = useSpring({
    from: {
      rotation: [0, 0, 0],
    },
    to: {
      rotation: [0, Math.PI * 2, 0],
    },
    loop: true,
    config: {
      duration: 4000,
    },
  });

  useFrame((state, dt) => {
    if (prog >= start && prog < end) {
      if (globalRef.current && dlRef.current) {
        if (!globalRef.current?.visible) {
          globalRef.current.visible = true;
          state.scene.environment = hdr;
          dlRef.current.visible = true;
        }
        // @ts-ignore
        if (state.camera.fov != 40) {
          // @ts-ignore
          state.camera.fov = 40;
          state.camera.updateProjectionMatrix();
        }
      }
    } else {
      if (globalRef.current?.visible) {
        if (dlRef.current) {
          dlRef.current.visible = false;
          globalRef.current.visible = false;
        }
        // @ts-ignore
        if (state.camera.fov != 140) {
          // @ts-ignore
          state.camera.fov = 140;
          state.camera.updateProjectionMatrix();
        }
      }
    }
  });

  return (
    <>
      <group ref={globalRef} position={position}>
        <PresentationControls
          enabled={isMobile || currentPage != 4 ? false : true}
          snap={true}
          cursor={false}
        >
          <Model
            currentPage={currentPage}
            position={[0, 0, 0]}
            scale={15}
            isMobile={isMobile}
          />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.75}
            scale={10}
            blur={2.5}
          />
        </PresentationControls>

        <animated.group ref={dlRef}>
          <pointLight intensity={400} position={[0, 6, 0]} />
          <pointLight intensity={400} position={[0, -6, 0]} />
          <pointLight intensity={400} position={[6, 1, 15]} />
        </animated.group>
      </group>
    </>
  );
}
