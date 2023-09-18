import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import {
  ContactShadows,
  Html,
  OrbitControls,
  PresentationControls,
  ScreenSpace,
  useGLTF,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { useSpring, animated } from "@react-spring/three";

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

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

function Model(props: {
  position: [x: number, y: number, z: number];
  scale: number;
  isMobile?: boolean;
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
  return (
    <animated.group
      scale={props.scale}
      position={props.position}
      rotation={props.isMobile ? (spring.rotation as any) : [0, 0, 0]}
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
          opacity={0.4}
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
}: {
  start: number;
  end: number;
  prog: number;
  position: [number, number, number];
}) {
  const globalRef = useRef<THREE.Group>(null);
  const dlRef = useRef<THREE.Group>(null);
  const [isMobile, setIsMobile] = useState<boolean>();
  const state = useThree();
  useEffect(() => {
    function handleResize() {
      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4),
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor);
      setIsMobile(check);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spring = useSpring({
    from: {
      rotation: [0, 0, 0],
      rotation_watch: [0, 0, 0],
    },
    to: {
      rotation: [0, 2 * Math.PI, 0],
      rotation_watch: [0, 0, 2 * Math.PI],
    },
    loop: true,
    config: {
      duration: 10000,
    },
  });

  useFrame((state, dt) => {
    if (prog >= start && prog < end) {
      if (globalRef.current && dlRef.current) {
        if (!globalRef.current?.visible) {
          globalRef.current.visible = true;
        }
        // @ts-ignore
        if (state.camera.fov != 40) {
          // @ts-ignore
          state.camera.fov = 40;
          state.camera.updateProjectionMatrix();
        }
        dlRef.current.visible = true;
      }
    } else {
      if (globalRef.current?.visible) {
        if (dlRef.current) {
          dlRef.current.visible = false;
          globalRef.current.visible = false;
        }
      }
    }
  });

  return (
    <>
      <group ref={globalRef} position={position}>
        <PresentationControls enabled={isMobile ? false : true} snap={true}>
          <Model position={[0, 0, 0]} scale={15} isMobile={isMobile} />
        </PresentationControls>
        
        <animated.group ref={dlRef} rotation={spring.rotation as any}>
          <pointLight intensity={400} position={[0, 6, 0]} />
          <pointLight intensity={400} position={[0, -6, 0]} />
          <pointLight intensity={400} position={[6, 1, 0]} />
          <pointLight intensity={400} position={[-6, 1, 0]} />
          <pointLight intensity={400} position={[6, 1, 6]} />
          <pointLight intensity={400} position={[-6, 1, 6]} />
        </animated.group>
      </group>
    </>
  );
}
