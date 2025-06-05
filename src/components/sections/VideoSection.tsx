import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { Container } from '../ui/Container';

export const VideoSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Placeholder YouTube video ID - replace with actual video when available
  const videoId = 'dQw4w9WgXcQ'; // This should be replaced with actual Lendefi video ID

  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Understanding <span className="gradient-text">Lendefi Markets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how composable lending markets work and how you can participate
            as a liquidity provider or borrower.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden glass-effect p-1">
            {/* Loading skeleton */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                  <p className="text-gray-400">Loading video...</p>
                </div>
              </div>
            )}
            
            {/* YouTube iframe */}
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Lendefi Markets Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400">
              Want to dive deeper? Check out our{' '}
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                comprehensive documentation
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                developer guides
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};