import { Plane } from '@react-three/drei'
import React from 'react'
import texture from "../Assets/a.png"
import { PlaneGeometry, Texture } from 'three';
import { MeshDistortMaterial,useTexture } from '@react-three/drei'
function MeshTest() {

  const ref = React.useRef()
  console.log(ref)

  // const bumpMap = useTexture(texture);
  return (
    <mesh position = {[0,0,0]}>
    <planeGeometry  attach="geometry" args={[50, 50, 50 , 50, 50, 50]} />
    {/* <meshStandardMaterial wireframe={true} attach="material" color={0xffffFF} /> */}
    <MeshDistortMaterial  attach="material"
    // wireframe={true}
    color={"#fff"}

    //  bumpMap={bumpMap}
     />

</mesh>
  )
}

export default MeshTest