export default function Lights({ intensity=1, angle=1 }) {
  return (
    <>
      <spotLight intensity={intensity} color='white' position={[1,0.1,0]} angle={angle} castShadow/>
      <spotLight intensity={intensity} color='white' position={[-1,0.1,0.5]} angle={angle} castShadow/>
      <spotLight intensity={intensity} color='white' position={[-1,0.1,-0.5]} angle={angle} castShadow/>
    </>
  )
}