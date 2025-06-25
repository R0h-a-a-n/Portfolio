import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [color, setColor] = useState('#6366f1');

  useEffect(() => {
    const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b6', '#22c55e', '#fbbf24', '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#f472b'];
    let i = 0;
    const interval = setInterval(() => {
      setColor(colors[i]);
      i = (i + 1) % colors.length;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-screen w-full px-4 md:px-12 text-black dark:text-white flex flex-col justify-center relative"
    >
      <div className="space-y-2 leading-tight select-none">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[8vw] md:text-[6vw] font-extrabold text-black dark:text-white"
          style={{ fontFamily: 'Google Sans, Roboto, sans-serif' }}
        >
          Hi
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[8vw] md:text-[6vw] font-extrabold text-black dark:text-white"
          style={{ fontFamily: 'Google Sans, Roboto, sans-serif' }}
        >
          I am
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-[12vw] md:text-[8vw] font-extrabold"
          style={{
            fontFamily: 'Google Sans, Roboto, sans-serif',
            color: color,
          }}
        >
          Rohaan
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-[7vw] md:text-[4vw] font-extrabold text-black dark:text-white"
          style={{ fontFamily: 'Google Sans, Roboto, sans-serif' }}
        >
          and writing clean code is my thing.
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-10 text-black dark:text-white font-bold text-xl flex items-center gap-2"
      >
        Scroll <span className="text-2xl">↘</span>
      </motion.div>
    </section>
  );
}

