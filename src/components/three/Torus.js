import React from 'react'
import {useRef, useState} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { MeshStandardMaterial, TextureLoader } from 'three'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

function Torus(props){
    const ref = useRef()
    //useFrame(() => (ref.current.rotation.x += 0.01, ref.current.roation.y += 0.01))

    const displacementMap = useTexture('//cdn.wtlstudio.com/sample.wtlstudio.com/827bc230-6686-4cc3-9389-4382d81e927a.png', (texture)=>
    {
        texture.encoding = THREE.sRGBEncoding;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
    })
    

    return(
        <mesh
        {...props}
        ref = {ref}
        rotation={[0, 1.57079633, 0]}>
        <torusGeometry args = {[3, 0.0000000001, 16, 100]}/>
        <meshStandardMaterial displacementMap={displacementMap} displacementScale={.5} />
        </mesh>
    )
}

export default Torus