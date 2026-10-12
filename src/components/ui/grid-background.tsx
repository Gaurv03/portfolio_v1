import React from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
  className?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ className = '' }) => {
  // Horizontal tracks: pure white glowing lines traveling across the ENTIRE viewport width
  const horizontalTracks = [
    {
      top: '14%',
      duration: 16,
      delay: 0,
      dir: 1, // left to right
      width: 'w-72 sm:w-[420px]',
    },
    {
      top: '32%',
      duration: 22,
      delay: 5,
      dir: -1, // right to left
      width: 'w-64 sm:w-[360px]',
    },
    {
      top: '52%',
      duration: 18,
      delay: 2,
      dir: 1, // left to right
      width: 'w-80 sm:w-[460px]',
    },
    {
      top: '70%',
      duration: 20,
      delay: 8,
      dir: -1, // right to left
      width: 'w-72 sm:w-[380px]',
    },
    {
      top: '88%',
      duration: 19,
      delay: 3,
      dir: 1, // left to right
      width: 'w-80 sm:w-[400px]',
    },
  ];

  // Vertical tracks: pure white glowing lines traveling across the ENTIRE viewport height
  const verticalTracks = [
    {
      left: '18%',
      duration: 20,
      delay: 1,
      dir: 1, // top to bottom
      height: 'h-64 sm:h-[360px]',
    },
    {
      left: '38%',
      duration: 24,
      delay: 7,
      dir: -1, // bottom to top
      height: 'h-72 sm:h-[400px]',
    },
    {
      left: '64%',
      duration: 18,
      delay: 3,
      dir: 1, // top to bottom
      height: 'h-64 sm:h-[380px]',
    },
    {
      left: '84%',
      duration: 22,
      delay: 9,
      dir: -1, // bottom to top
      height: 'h-72 sm:h-[420px]',
    },
  ];

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden select-none -z-50 ${className}`}>
      {/* Dense Fine-Grid Pattern (32px squares for tighter, denser grid) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 dark:opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="dense-infra-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className="text-slate-400/40 dark:text-slate-600/35"
            />
            {/* Subtle intersection dot */}
            <circle
              cx="0"
              cy="0"
              r="0.75"
              className="fill-slate-500/30 dark:fill-slate-500/40"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dense-infra-grid)" />
      </svg>

      {/* Subtle Vignette Mask to keep focus on center content */}
      <div className="absolute inset-0 bg-radial from-transparent via-background/50 to-background opacity-85" />

      {/* White Glowing Lines along Horizontal Grid Lines — Full Screen Traversal */}
      {horizontalTracks.map((track, i) => (
        <div
          key={`h-track-${i}`}
          className="absolute left-0 right-0 h-px overflow-hidden pointer-events-none"
          style={{ top: track.top }}
        >
          {/* Static grid baseline */}
          <div className="absolute inset-0 bg-zinc-900/10 dark:bg-slate-700/20" />

          {/* Line segment traveling edge to edge across the entire screen: black in light mode, white glowing in dark mode */}
          <motion.div
            initial={{
              x: track.dir === 1 ? '-500px' : 'calc(100vw + 500px)',
            }}
            animate={{
              x: track.dir === 1 ? 'calc(100vw + 500px)' : '-500px',
            }}
            transition={{
              duration: track.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: track.delay,
            }}
            className={`absolute top-0 h-[1.5px] ${track.width} bg-linear-to-r from-transparent via-zinc-900 to-transparent shadow-[0_0_6px_rgba(0,0,0,0.4)] dark:via-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.4)]`}
          >
            {/* Leading pulse core: black in light mode, white glowing in dark mode */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 ${
                track.dir === 1 ? 'right-6' : 'left-6'
              } size-1 rounded-full bg-zinc-900 shadow-[0_0_6px_rgba(0,0,0,0.6)] dark:bg-white dark:shadow-[0_0_6px_#ffffff,0_0_12px_#ffffff]`}
            />
          </motion.div>
        </div>
      ))}

      {/* Moving Lines along Vertical Grid Lines — Full Screen Traversal */}
      {verticalTracks.map((track, i) => (
        <div
          key={`v-track-${i}`}
          className="absolute top-0 bottom-0 w-px overflow-hidden pointer-events-none hidden sm:block"
          style={{ left: track.left }}
        >
          {/* Static grid baseline */}
          <div className="absolute inset-0 bg-zinc-900/10 dark:bg-slate-700/20" />

          {/* Line segment traveling edge to edge across the entire screen: black in light mode, white glowing in dark mode */}
          <motion.div
            initial={{
              y: track.dir === 1 ? '-500px' : 'calc(100vh + 500px)',
            }}
            animate={{
              y: track.dir === 1 ? 'calc(100vh + 500px)' : '-500px',
            }}
            transition={{
              duration: track.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: track.delay,
            }}
            className={`absolute left-0 w-[1.5px] ${track.height} bg-linear-to-b from-transparent via-zinc-900 to-transparent shadow-[0_0_6px_rgba(0,0,0,0.4)] dark:via-white dark:shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.4)]`}
          >
            {/* Leading pulse core: black in light mode, white glowing in dark mode */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 ${
                track.dir === 1 ? 'bottom-6' : 'top-6'
              } size-1 rounded-full bg-zinc-900 shadow-[0_0_6px_rgba(0,0,0,0.6)] dark:bg-white dark:shadow-[0_0_6px_#ffffff,0_0_12px_#ffffff]`}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default GridBackground;
