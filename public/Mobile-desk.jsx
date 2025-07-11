/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 mobile-desk.glb 
*/

import React from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/mobile-desk.glb')
  return (
    <group {...props} dispose={null}>
      <OrthographicCamera makeDefault={false} far={100} near={0.1} position={[1.762, 8.208, -1.153]} rotation={[-2.931, 0.008, 3.138]} />
      <group position={[-0.55, 6.25, 5.551]} rotation={[-Math.PI, 0.629, 0]} scale={[-0.057, -0.031, -0.115]}>
        <mesh geometry={nodes.Cube673.geometry} material={materials['record-cover-material']} />
        <mesh geometry={nodes.Cube673_1.geometry} material={materials['record-needle-material']} />
        <mesh geometry={nodes.Cube673_2.geometry} material={materials['record-button-material']} />
        <mesh geometry={nodes.Cube673_3.geometry} material={materials['record-body-material']} />
        <mesh geometry={nodes.Cube673_4.geometry} material={materials['record-turntable-material']} />
        <mesh geometry={nodes.Cube673_5.geometry} material={materials['shelf-material']} />
      </group>
      <mesh geometry={nodes.record.geometry} material={materials['Material.002']} position={[-0.517, 6.225, 5.481]} rotation={[-Math.PI, 0.629, 0]} scale={[-0.057, -0.031, -0.115]} />
      <mesh geometry={nodes.monitor.geometry} material={materials['monitor-material']} position={[4.038, 5.142, 6.742]} rotation={[0, 0.193, 0]} scale={[1.56, 1.024, 0.16]} />
      <mesh geometry={nodes['white-board'].geometry} material={materials['white-board-material']} position={[1.639, 7.102, 7.148]} scale={[2.452, 2.343, 0.065]} />
      <group position={[2.179, 3.995, 5.151]} rotation={[2.977, 0, -Math.PI]} scale={[-1.035, -0.037, -0.382]}>
        <mesh geometry={nodes.Cube574.geometry} material={materials['desk-mat-material']} />
        <mesh geometry={nodes.Cube574_1.geometry} material={materials['keyboard-base-material']} />
        <mesh geometry={nodes.Cube574_2.geometry} material={materials['white-key-material']} />
        <mesh geometry={nodes.Cube574_3.geometry} material={materials['grey-key-material']} />
        <mesh geometry={nodes.Cube574_4.geometry} material={materials['red-key-material']} />
        <mesh geometry={nodes.Cube574_5.geometry} material={materials['green-key-material']} />
        <mesh geometry={nodes.Cube574_6.geometry} material={materials['desk-material']} />
        <mesh geometry={nodes.Cube574_7.geometry} material={materials['book-4-material']} />
      </group>
      <group position={[-0.119, 5.583, 7.071]} rotation={[0.039, -0.519, -2.291]} scale={[-0.246, -0.391, -0.186]}>
        <mesh geometry={nodes.Sphere015.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Sphere015_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Sphere015_2.geometry} material={materials.Material} />
        <mesh geometry={nodes.Sphere015_3.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Sphere015_4.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-0.463, 6.174, 6.454]} rotation={[0.052, -0.778, 0.502]} scale={[-0.156, -0.191, -0.169]}>
        <mesh geometry={nodes.Sphere013.geometry} material={materials['cat-eyes']} />
        <mesh geometry={nodes.Sphere013_1.geometry} material={materials['cat-head']} />
        <mesh geometry={nodes.Sphere013_2.geometry} material={materials['cat-pupils.001']} />
      </group>
      <mesh geometry={nodes.room.geometry} material={materials['Material.006']} position={[1.52, 7.112, 4.477]} scale={[5.297, 4.074, 2.947]} />
    </group>
  )
}

useGLTF.preload('/mobile-desk.glb')
