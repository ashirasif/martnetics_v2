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

  return <group ref={globalRef}></group>;
}

export default Testimony;
