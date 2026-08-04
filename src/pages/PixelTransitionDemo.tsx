import { useState } from 'react';
import { motion } from 'framer-motion';
import PixelTransition from '../components/PixelTransition';

const PixelTransitionDemo = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pixelSize, setPixelSize] = useState(10);
  const [duration, setDuration] = useState(0.6);

  const handleTriggerTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, duration * 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <PixelTransition 
        isActive={isTransitioning} 
        pixelSize={pixelSize}
        duration={duration}
      />

      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Pixel Transition Effect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A beautiful pixel dissolve transition effect for your web application
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Demo Button */}
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button
                onClick={handleTriggerTransition}
                className="btn-primary text-lg py-4 px-8 mb-8"
              >
                Trigger Pixel Transition
              </button>
              <p className="text-gray-600">
                Click the button to see the pixel transition effect in action!
              </p>
            </motion.div>

            {/* Controls */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-dark mb-6">
                Customize Effect
              </h2>

              {/* Pixel Size */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pixel Size: <span className="text-brand font-bold">{pixelSize}px</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={pixelSize}
                  onChange={(e) => setPixelSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5px</span>
                  <span>30px</span>
                </div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration: <span className="text-brand font-bold">{duration.toFixed(1)}s</span>
                </label>
                <input
                  type="range"
                  min="0.3"
                  max="2"
                  step="0.1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.3s</span>
                  <span>2s</span>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-dark mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '🎨 Customizable pixel size',
                  '⚡ Smooth animations',
                  '🎯 Easy to integrate',
                  '📱 Fully responsive',
                  '🔧 Adjustable duration',
                  '✨ Beautiful dissolve effect'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-text-dark mb-6">How to Use</h2>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
              <pre className="text-sm font-mono">
{`import PixelTransition from '@/components/PixelTransition';
import { useState } from 'react';

export function MyComponent() {
  const [isTransitioning, setIsTransitioning] = 
    useState(false);

  return (
    <>
      <PixelTransition 
        isActive={isTransitioning}
        pixelSize={10}
        duration={0.6}
      />
      
      <button onClick={() => {
        setIsTransitioning(true);
        // Handle transition
      }}>
        Trigger Effect
      </button>
    </>
  );
}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PixelTransitionDemo;
