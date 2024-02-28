import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop =() => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={1}
      rotation={[Math.PI / 50, 0, 0]}
      position={[0, -0.29, -0.14]}
    >
      <RandomizedLight 
        amount={1}
        radius={2}
        intensity={3.5}
        ambient={0.25}
        position={[5, 5, 10]}
      />
      <RandomizedLight 
        amount={1}
        radius={3}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop