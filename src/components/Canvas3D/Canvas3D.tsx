import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

import MotionSuit from '../MotionSuit/MotionSuit'
import './Canvas3D.scss'
import Lights from './Lights'



export default function Canvas3D() {
  return (
    <section id="Canvas3D" className='Canvas3D'>
      <Canvas shadows={false} style={{background: 'white'}}>
        <Stats showPanel={1}/>
        <OrbitControls/>
        <PerspectiveCamera makeDefault fov={30} position={[-3,1,1]} />
        
        <group position={[0,0.2,0]}>
        <Lights intensity={0.8} angle={0.5}/>
        <MotionSuit/>
        </group>
      </Canvas>
    </section>
  )
}