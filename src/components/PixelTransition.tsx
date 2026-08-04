import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PixelTransitionProps {
  isActive: boolean;
  pixelSize?: number;
  duration?: number;
}

const PixelTransition = ({ 
  isActive, 
  pixelSize = 10, 
  duration = 0.6
}: PixelTransitionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pixels: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];

    // Create pixel particles across the screen
    for (let x = 0; x < canvas.width; x += pixelSize) {
      for (let y = 0; y < canvas.height; y += pixelSize) {
        pixels.push({
          x,
          y,
          size: pixelSize,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: Math.random() * 0.5 + 0.5,
        });
      }
    }

    let startTime = Date.now();
    const maxDuration = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / maxDuration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(2, 80, 99, 0.8)';

      pixels.forEach((pixel) => {
        const currentLife = pixel.life * (1 - progress);
        if (currentLife > 0) {
          const alpha = currentLife * 0.8;
          ctx.globalAlpha = alpha;
          ctx.fillRect(
            pixel.x + pixel.vx * progress * 10,
            pixel.y + pixel.vy * progress * 10,
            pixel.size,
            pixel.size
          );
        }
      });

      ctx.globalAlpha = 1;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isActive, pixelSize, duration]);

  if (!isActive) return null;

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration }}
    />
  );
};

export default PixelTransition;
