import { useRef, Suspense, ReactNode, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface CardMeshProps {
  mousePosition: { x: number; y: number };
}

const CardMesh = ({ mousePosition }: CardMeshProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth rotation based on mouse position
      const targetRotationY = (mousePosition.x - 0.5) * 0.5;
      const targetRotationX = -(mousePosition.y - 0.5) * 0.5;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.1
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.1
      );
    }
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[3, 2, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#1e1e2e"
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </RoundedBox>
      
      {/* Glowing edges */}
      <RoundedBox args={[3.02, 2.02, 0.08]} radius={0.1} smoothness={4}>
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </RoundedBox>
    </group>
  );
};

interface Interactive3DCardProps {
  children?: ReactNode;
  className?: string;
}

const Interactive3DCard = ({ children, className = "" }: Interactive3DCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 4], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
            <CardMesh mousePosition={mousePosition} />
          </Canvas>
        </Suspense>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Interactive3DCard;
