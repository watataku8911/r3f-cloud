import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
const Rig = () => {
  const camera = useThree((state) => state.camera);
  return useFrame((state) => {
    camera.position.z = Math.sin(state.clock.elapsedTime) * 20;
  });
};
export default Rig;
