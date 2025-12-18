"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      
      colors[i * 3] = 1
      colors[i * 3 + 1] = 1
      colors[i * 3 + 2] = 1
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.x = time * 0.02
    mesh.current.rotation.y = time * 0.03
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.001
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  const positionAttribute = useMemo(() => {
    return new THREE.BufferAttribute(particles.positions, 3)
  }, [particles.positions])

  const colorAttribute = useMemo(() => {
    return new THREE.BufferAttribute(particles.colors, 3)
  }, [particles.colors])

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <primitive object={positionAttribute} attach="attributes-position" />
        <primitive object={colorAttribute} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.1
    meshRef.current.rotation.y = time * 0.15
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2
  })

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  )
}

function GridPlane() {
  return (
    <gridHelper
      args={[20, 40, "#ffffff", "#ffffff"]}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    >
      <meshBasicMaterial attach="material" transparent opacity={0.03} />
    </gridHelper>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 15]} />
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingGeometry />
        <GridPlane />
      </Canvas>
    </div>
  )
}
