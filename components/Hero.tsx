import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SharedProps } from '../types';

const Hero: React.FC<SharedProps> = ({ onOpenContact }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let rotation = { x: 0, y: 0 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      tx: number; // Target x (cube space)
      ty: number;
      tz: number;
      color: string;
      size: number;

      constructor(tx: number, ty: number, tz: number) {
        this.tx = tx;
        this.ty = ty;
        this.tz = tz;
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.color = Math.random() > 0.5 ? '#06b6d4' : '#e879f9';
        this.size = Math.random() * 2 + 1;
      }

      update(centerX: number, centerY: number) {
        // 1. Calculate Target Position (Cube Rotation)
        const cosX = Math.cos(rotation.x);
        const sinX = Math.sin(rotation.x);
        const cosY = Math.cos(rotation.y);
        const sinY = Math.sin(rotation.y);

        let rx = this.tx * cosY - this.tz * sinY;
        let rz = this.tx * sinY + this.tz * cosY;
        let ry = this.ty * cosX - rz * sinX;
        rz = this.ty * sinX + rz * cosX;

        const perspective = 800;
        const scale = perspective / (perspective + rz + 400); // Push back

        const targetX = centerX + rx * scale;
        const targetY = centerY + ry * scale;

        // 2. Physics (Velocity + Spring)
        const dx = targetX - this.x;
        const dy = targetY - this.y;
        
        // Spring force
        const force = 0.02; 
        
        this.vx += dx * force;
        this.vy += dy * force;
        
        // Friction
        const friction = 0.92;
        this.vx *= friction;
        this.vy *= friction;

        this.x += this.vx;
        this.y += this.vy;

        // 3. Draw
        const drawSize = Math.max(0.5, this.size * scale);
        const alpha = Math.max(0.1, Math.min(1, scale));

        if (ctx) {
          ctx.globalAlpha = alpha;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, drawSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const spacing = 40; 
      const size = 180; // Cube radius
      
      // Create hollow cube grid
      for (let x = -size; x <= size; x += spacing) {
        for (let y = -size; y <= size; y += spacing) {
          for (let z = -size; z <= size; z += spacing) {
            // Check if point is on the surface (one coord is at +/- size)
            // Using a tolerance or exact check depending on loop
            if (Math.abs(Math.abs(x) - size) < 1 || 
                Math.abs(Math.abs(y) - size) < 1 || 
                Math.abs(Math.abs(z) - size) < 1) {
              particles.push(new Particle(x, y, z));
            }
          }
        }
      }
    };

    const animate = () => {
      // Clear with fade for trails
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Always rotate cube
      rotation.x += 0.005;
      rotation.y += 0.008;

      particles.forEach(p => p.update(centerX, centerY));
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            <span className="text-xs font-semibold text-fuchsia-300 tracking-wide uppercase">
              Vibe coding enabled
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-tight">
            GET YOUR PROJECT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 animate-gradient-x bg-[length:200%_auto]">
              DONE IN WEEKS
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light pointer-events-auto"
        >
          We develop complex digital systems with extreme speed and quality.
          From concept to production faster than you can imagine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center pointer-events-auto"
        >
          <button 
            onClick={onOpenContact}
            className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-none skew-x-[-12deg] hover:bg-cyan-400 transition-colors duration-300"
          >
            <div className="skew-x-[12deg]">START PROJECT</div>
            <div className="absolute inset-0 border border-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 z-10">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
