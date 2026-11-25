import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles } from '@react-three/drei'

function Robot() {
  return (
    <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.5}>
      <group>
        <mesh position={[0, -.48, 0]} castShadow>
          <capsuleGeometry args={[.46, .55, 8, 16]}/>
          <meshStandardMaterial color="#dce5f2" metalness={.65} roughness={.25}/>
        </mesh>
        <mesh position={[0, .48, 0]} castShadow>
          <sphereGeometry args={[.7, 40, 40]}/>
          <meshStandardMaterial color="#edf2fa" metalness={.6} roughness={.22}/>
        </mesh>
        <mesh position={[0, .46, .57]}>
          <boxGeometry args={[.94, .38, .14]}/>
          <meshStandardMaterial color="#101a30" metalness={.4} roughness={.2}/>
        </mesh>
        {[-.23, .23].map(x => <mesh key={x} position={[x, .47, .66]}>
          <sphereGeometry args={[.075, 20, 20]}/>
          <meshBasicMaterial color="#69e4ff"/>
        </mesh>)}
        {[-1, 1].map(side => <group key={side} position={[side*.72, .48, 0]}>
          <mesh><cylinderGeometry args={[.13,.13,.16,24]}/><meshStandardMaterial color="#91a5c3" metalness={.7}/></mesh>
        </group>)}
        {[-1, 1].map(side => <mesh key={side} position={[side*.59,-.42,0]} rotation={[0,0,side*-.25]}>
          <capsuleGeometry args={[.12,.48,6,12]}/><meshStandardMaterial color="#b9c7dc" metalness={.6}/>
        </mesh>)}
      </group>
    </Float>
  )
}

export default function Robot3D() {
  return <div className="robot-canvas">
    <Canvas camera={{ position: [0, 0, 4.3], fov: 38 }}>
      <ambientLight intensity={1.4}/>
      <directionalLight position={[3,4,5]} intensity={2}/>
      <pointLight position={[-3,0,2]} color="#7667ff" intensity={16}/>
      <Robot/>
      <Sparkles count={35} scale={4} size={2} speed={.35} color="#8bdfff"/>
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={1.1} maxPolarAngle={2.05}/>
    </Canvas>
  </div>
}