"use client";

import { motion } from "framer-motion";

export const RevealUp = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 12,
          filter: "blur(5px)",
        },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};