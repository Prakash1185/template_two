"use client";

import { motion } from "framer-motion";

export const LineReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            clipPath: "inset(100% 0% 0% 0%)",
            filter: "blur(3px)",
          },
          show: {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            filter: "blur(0px)",
            transition: {
              duration: 1.4, // slower
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};