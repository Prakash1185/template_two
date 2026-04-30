"use client";

import { motion } from "framer-motion";

export const Stagger = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25, // slower, more premium
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
