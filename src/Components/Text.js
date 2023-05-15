import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import boldUrl from '../Assets/fonts/bold.blob'
import { MeshDistortMaterial, Text3D } from '@react-three/drei'

export default function Text({ children, vAlign = 'center', hAlign = 'center', size = 1.5, color = '#000000', ...props }) {
  const config = useMemo(
    () => ({ size: 20, height: 1, curveSegments: 2, bevelEnabled: true, bevelThickness: 5, bevelSize: 1, bevelOffset: 0, bevelSegments: 1 }),
    []
  )
  const mesh = useRef()

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={boldUrl} {...config}>
        {children}
        <MeshDistortMaterial time={0.1} distort={0.5} factor={0.1} speed={0.1 } radius={1.9} />
      </Text3D>
    </group>
  )
}
