import { Splat, CameraControls } from "@react-three/drei";
import { button, useControls } from "leva";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { CameraHelper } from "three";
import { useFrame, useThree } from "@react-three/fiber";
export default function CampusSplat() {
  const splat = useRef<THREE.Mesh>();

  const { rotationX, rotationY, rotationZ, positionY, positionZ } = useControls(
    {
      rotationX: {
        value: 0,
        min: 0,
        max: 2,
        step: 0.1,
        onChange: (value) => {
          if (splat.current) {
            splat.current.rotation.x = value * Math.PI;
          }
        },
      },
      rotationY: {
        value: 1.0,
        min: 0,
        max: 2,
        step: 0.01,
        onChange: (value) => {
          if (splat.current) {
            splat.current.rotation.y = value * Math.PI;
          }
        },
      },
      rotationZ: {
        value: 1.99,
        min: 0,
        max: 2,
        step: 0.01,
        onChange: (value) => {
          if (splat.current) {
            splat.current.rotation.z = value * Math.PI;
          }
        },
      },
      positionY: {
        value: 0.7,
        min: -10,
        max: 10,
        step: 0.01,
        onChange: (value) => {
          if (splat.current) {
            splat.current.position.y = value;
          }
        },
      },
      positionZ: {
        value: 1.36,
        min: -10,
        max: 10,
        step: 0.01,
        onChange: (value) => {
          if (splat.current) {
            splat.current.position.z = value;
          }
        },
      },
    },
  );

  return (
    <>
      <group
        ref={splat}
        rotation={[
          rotationX * Math.PI,
          rotationY * Math.PI,
          rotationZ * Math.PI,
        ]}
        position={[0, positionY, positionZ]}
      >
        <Splat src="art_final.splat" />
      </group>
    </>
  );
}
