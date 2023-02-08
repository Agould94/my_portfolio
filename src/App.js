import Box from './components/three/Box';
import React from 'react';
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Torus from './components/three/Torus';
import { OrbitControls } from '@react-three/drei'
//import { PerspectiveCamera } from '@react-three/drei'
import { CameraHelper } from 'three';
import { PerspectiveCamera } from 'three';

function App() {
  const config = {fov: 55, position: [11,100,40.]}

  function CameraHelper(){
    const camera = new PerspectiveCamera(60,1,1,9)
    return <cameraHelper args = {[camera]}/>
  }

  return (
    <Canvas camera = {{position: [0,-10,-10], fov: 90}}>
      <OrbitControls rotateSpeed={0} autoRotate={false}/>
      <ambientLight></ambientLight>
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Torus position = {[0, 0, 0 ]}></Torus>
      <CameraHelper/>
    </Canvas>
  );
}

export default App;
