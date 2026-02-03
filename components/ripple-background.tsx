"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useMemo, useRef, useEffect } from "react"
import * as THREE from "three"

const RippleShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#000000") }, // Base color
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      
      // Aspect ratio correction for mouse
      vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
      vec2 mouse = uMouse * aspect;
      vec2 uvCorrected = uv * aspect;

      // Base water movement using noise
      float noiseVal = snoise(uv * 3.0 + uTime * 0.2);
      
      // Ripple effect
      float dist = distance(uvCorrected, mouse);
      float ripple = sin(dist * 20.0 - uTime * 2.0) * exp(-dist * 3.0);
      
      // Combine noise and ripple
      float height = noiseVal * 0.05 + ripple * 0.1;
      
      // Color mixing based on height
      vec3 color = mix(uColor, vec3(0.1, 0.3, 0.5), height + 0.5);
      
      // Add highlights
      float highlight = smoothstep(0.4, 0.6, height + 0.5);
      color += vec3(1.0) * highlight * 0.3;

      gl_FragColor = vec4(color, 1.0);
    }
  `
}

const RipplePlane = () => {
  const mesh = useRef<THREE.Mesh>(null)
  const { size, viewport } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#050510") }, // Deep dark blue/black
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) }
    }),
    []
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized coordinates 0..1
      const x = e.clientX / window.innerWidth
      const y = 1.0 - e.clientY / window.innerHeight // Flip Y
      uniforms.uMouse.value.set(x, y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [uniforms])

  useFrame((state) => {
    if (mesh.current) {
      uniforms.uTime.value = state.clock.getElapsedTime()
      uniforms.uResolution.value.set(size.width, size.height)
    }
  })

  // Full viewport plane
  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={RippleShaderMaterial.vertexShader}
        fragmentShader={RippleShaderMaterial.fragmentShader}
      />
    </mesh>
  )
}

export default function RippleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RipplePlane />
      </Canvas>
    </div>
  )
}
