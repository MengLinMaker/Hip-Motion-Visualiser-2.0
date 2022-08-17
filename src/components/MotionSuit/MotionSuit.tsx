import { useGLTF } from '@react-three/drei'
import React from 'react'

import model from '../../assets/hipModel.glb?url'
import SingleMesh from './SingleMesh'


export default function MotionSuit() {
  const { nodes }:any = useGLTF(model)
  
  const material:object = {
    clearcoat: 0.8,
    clearcoatRoughness: 0.3,
    color: '#ffaa44',
  }

  return (
    <group position={[0,0,0]}>
      <SingleMesh model={nodes.hip} material={material}/>
      <SingleMesh position={[0,-0.019,0.086]} model={nodes.leftThigh} material={material}/>
      <SingleMesh position={[0,-0.019,-0.086]} model={nodes.rightThigh} material={material}/>
    </group>
  )
}