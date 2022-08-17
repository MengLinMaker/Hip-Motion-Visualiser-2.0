export default function SingleMesh({ rotation, material, position, model, color }:any) {
  return(
    <mesh rotation={rotation} position={position} geometry={model.geometry} castShadow receiveShadow>
      <meshPhysicalMaterial color={color} {...material}/>
    </mesh>
  )
}