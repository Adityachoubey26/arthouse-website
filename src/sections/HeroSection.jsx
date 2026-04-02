import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import * as THREE from 'three';
import { IMAGES, CONTACT } from '../assets/index.js';

// Floating 3D panel
const Panel = ({ position, rotation, color, scale = 1 }) => {
  const meshRef = useRef();
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth - 0.5) * 1.5,
        -(e.clientY / window.innerHeight - 0.5) * 1.5,
      ];
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Subtler motion
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotation[1] + mouse.current[0] * 0.1, 0.05);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, rotation[0] + mouse.current[1] * 0.05, 0.05);
    meshRef.current.position.y = position[1] + Math.sin(t * 0.3 + position[0]) * 0.1;
  });

  return (
    <Float speed={1.2} floatIntensity={0.3} rotationIntensity={0.2}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <boxGeometry args={[1.2, 1.8, 0.06]} />
        <MeshDistortMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          distort={0.05}
          speed={1.5}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
};

// Ambient particles - Reduced count for less clutter
const Particles = () => {
  const pointsRef = useRef();
  const count = 40;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00AFAF" size={0.02} transparent opacity={0.3} />
    </points>
  );
};

const Scene = () => {
  const panels = [
    { position: [-3.5, 0.5, -2], rotation: [0.1, 0.5, 0], color: '#00AFAF', scale: 1.2 },
    { position: [0.5, -0.8, 0.5], rotation: [-0.05, 0.3, 0.05], color: '#D4AF37', scale: 1.1 },
    { position: [4, 0.8, -1.5], rotation: [0.1, -0.4, -0.05], color: '#007a7a', scale: 0.95 },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} color="#00AFAF" />
      <pointLight position={[0, 0, 5]} intensity={0.8} color="#00AFAF" />
      <Environment preset="night" />
      <Particles />
      {panels.map((p, i) => (
        <Panel key={i} {...p} />
      ))}
    </>
  );
};

const HeroSection = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[110vh] flex items-center overflow-hidden bg-[#050810]">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#050810] via-transparent to-[#0a1128]/40" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050810] to-transparent z-0" />

      {/* Content Container */}
      <div className="section-container relative z-10 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content - Balanced and Centered in Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 lg:pr-12 max-w-2xl break-words"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 glass px-5 py-2 rounded-full border-white/5"
              >
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="text-teal text-[10px] font-bold uppercase tracking-[0.4em]">
                  The Pinnacle of Wall Artistry
                </span>
              </motion.div>

              <h1 
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[1.05] tracking-tight max-w-2xl break-words"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Sculpting <br />
                <span className="gradient-text-teal italic">Luxury</span> <br />
                <span className="text-white/40">into</span>{' '}
                <span className="gradient-text-gold">Reality</span>
              </h1>

              <p className="text-white/30 text-lg md:text-xl font-light leading-relaxed max-w-xl break-words">
                Art House redefines interiors with exquisite 3D wall panels, premium textures, and bespoke designs tailored for the discerning few.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              <button
                onClick={() => handleScroll('services')}
                className="btn-primary text-xs px-10 py-4 uppercase tracking-[0.2em] font-bold rounded-full group"
              >
                Discover Collections
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white/10 text-white hover:bg-white hover:text-black transition-all text-xs px-10 py-4 uppercase tracking-[0.2em] font-bold rounded-full"
              >
                Book a Visit
              </a>
            </div>
          </motion.div>

          {/* Right Side - Subtle Visual Balance */}
          <div className="hidden lg:flex justify-center items-center h-[500px] relative">
            {/* Minimal accent to help visual balance */}
            <div className="absolute w-[300px] h-[300px] bg-teal/5 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-12 z-10 flex flex-col items-center gap-4 hidden lg:flex"
      >
        <span className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase vertical-text">Explore</span>
        <div className="w-px h-24 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="absolute inset-0 bg-teal"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
