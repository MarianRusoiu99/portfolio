import React, { useRef, Suspense } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'

function Background() {
  return (
 
  
  
    // <Canvas camera={{ position: [0, 0, 1.1] }}>
    //   {/* <ambientLight/> */}
    //   <pointLight/>
    //   <MeshTest/>
    //   {/* <Text hAlign="right" position={[0, 0, 0]} children="THREE" /> */}
    //   <OrbitControls/>
    // </Canvas>
    
<Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
   
    </Canvas>
    )
}

export default Background