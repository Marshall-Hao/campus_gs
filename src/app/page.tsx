"use client";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  CameraControlsProps,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import * as THREE from "three";
import CampusSplat from "@/components/canvas/CampusSplat";
import { useRef, useEffect } from "react";
import { Joystick } from "react-joystick-component";

export default function Home() {
  const control = useRef<CameraControlsProps>();

  return (
    <>
      <Joystick
        size={100}
        baseColor="rgba(227,227,227,0.4)"
        stickColor="rgba(227,227,227,0.6)"
        stickSize={48}
        move={(e) => {
          control.current?.truck(e.x / 10, 0, true);
          control.current?.dolly(e.y / 10, true);
          console.log(control.current?.distance);
        }}
      />
      <Canvas
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
      >
        <CameraControls
          ref={control}
          maxZoom={0}
          minDistance={0.05}
          maxDistance={6}
          minPolarAngle={Math.PI * 0.48}
          maxPolarAngle={Math.PI * 0.55}
          // disable all mouse buttons
          // mouseButtons={{
          //   left: 0,
          //   middle: 0,
          //   right: 0,
          //   wheel: 0,
          // }}
          // // disable all touch gestures
          // touches={{
          //   one: 0,
          //   two: 0,
          //   three: 0,
          // }}
        />
        <Preload all />

        <CampusSplat />
      </Canvas>
    </>
  );
}
