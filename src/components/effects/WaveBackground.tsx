import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const { geometry, uniforms } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, 64, 64);
    const unis = {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#8b5cf6") },
      uColor2: { value: new THREE.Color("#06b6d4") },
    };
    return { geometry: geo, uniforms: unis };
  }, []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position;
      const time = state.clock.elapsedTime;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = Math.sin(x * 0.5 + time) * 0.3 + 
                  Math.sin(y * 0.3 + time * 0.8) * 0.2 +
                  Math.sin((x + y) * 0.2 + time * 0.5) * 0.2;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, -5]}>
      <planeGeometry args={[20, 20, 64, 64]} />
      <meshStandardMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
};

const WaveBackground = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none -z-10 ${className}`}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.3} />
          <WaveMesh />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default WaveBackground;
