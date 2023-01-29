import Box from './components/three/Box';
import React from 'react';
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Torus from './components/three/Torus';
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <Canvas>
      <OrbitControls rotateSpeed={0} autoRotate={false}/>
      <ambientLight></ambientLight>
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Torus position = {[0, 0, 0 ]}></Torus>
    </Canvas>
  );
}

export default App;
