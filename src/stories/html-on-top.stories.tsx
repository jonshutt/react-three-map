import { Box, Html, Stats } from "@react-three/drei";
import { useState } from "react";
import { MathUtils } from "three";
import { StoryMap } from "./story-map";

export function Default() {

  const [hovered, hover] = useState(false);

  return <StoryMap latitude={51} longitude={0}>
    <Html>ola</Html>
    <Box
      args={[500, 500, 500]}
      position={[0, 250, 0]}
      rotation={[0, 45 * MathUtils.DEG2RAD, 0]}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      material-color={hovered ? 'purple' : 'orange'}
    />
    <Stats />
  </StoryMap>
}