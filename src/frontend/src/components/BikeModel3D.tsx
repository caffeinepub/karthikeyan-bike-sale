import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface BikeModel3DProps {
  color: string;
}

function Motorcycle({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const bikeColor = color === 'red' ? '#dc2626' : color === 'black' ? '#18181b' : '#f5f5f5';
  const metalColor = '#404040';

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Main body/frame */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.5, 0.3, 0.5]} />
        <meshStandardMaterial color={bikeColor} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Fuel tank */}
      <mesh position={[0.2, 0.5, 0]} castShadow>
        <boxGeometry args={[0.8, 0.4, 0.6]} />
        <meshStandardMaterial color={bikeColor} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Seat */}
      <mesh position={[-0.4, 0.5, 0]} castShadow>
        <boxGeometry args={[0.6, 0.2, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Front wheel */}
      <group position={[0.8, 0, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
          <meshStandardMaterial color={metalColor} metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Rear wheel */}
      <group position={[-0.8, 0, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.15, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
          <meshStandardMaterial color={metalColor} metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Handlebars */}
      <mesh position={[0.9, 0.6, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 16]} />
        <meshStandardMaterial color={metalColor} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Front fork */}
      <mesh position={[0.8, 0.2, 0.15]} rotation={[0.3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.5, 16]} />
        <meshStandardMaterial color={metalColor} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.8, 0.2, -0.15]} rotation={[0.3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.5, 16]} />
        <meshStandardMaterial color={metalColor} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Exhaust */}
      <mesh position={[-0.3, 0.1, -0.3]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.08, 0.8, 16]} />
        <meshStandardMaterial color={metalColor} metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Headlight */}
      <mesh position={[1, 0.4, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffff00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#404040" wireframe />
    </mesh>
  );
}

export default function BikeModel3D({ color }: BikeModel3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 2, 3], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} />
        <spotLight position={[0, 5, 0]} intensity={0.3} angle={0.6} penumbra={1} />
        
        <Suspense fallback={<LoadingFallback />}>
          <Motorcycle color={color} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
        />
        
        {/* Ground plane for shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
    </div>
  );
}
