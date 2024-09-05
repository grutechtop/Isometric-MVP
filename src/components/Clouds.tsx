"use client";
import React, { useEffect, useMemo } from "react";
import CloudL from "./SVGIcons/CloudL";
import CloudR from "./SVGIcons/CloudR";
import { motion } from "framer-motion";

export default function Clouds(): React.ReactElement {
  const screenWidth = useMemo(() => {
    if (typeof window !== "undefined") return window.innerWidth;

    return 0;
  }, []);
  return (
    <div className="-z-40">
      {/* //right to left */}
      <motion.div
        initial={{ x: screenWidth - 100, y: -300, scale: 1.8 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 80,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -500 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudL fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth - 200, y: -400, scale: 0.6 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 60,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -500 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudL fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth, y: -300, scale: 0.3 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 80,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -300 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth - 300, y: -400, scale: 1.3 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 70,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -200 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth - 500, y: -300, scale: 1.1 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 50,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -300 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth - 900, y: -600, scale: 0.5 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 80,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -500 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudL fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth - 300, y: -700, scale: 1.2 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 60,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -500 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudL fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth - 800, y: -300, scale: 0.8 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 80,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -300 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth - 300, y: -200, scale: 1.3 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 70,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -50 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#FDF2D7" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth - 800, y: -300, scale: 1.5 }}
        animate={{ x: 0 }}
        className="absolute -z-0"
        transition={{
          ease: "linear",
          duration: 50,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -100 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute -z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#FDF2D7" />
        </motion.div>
      </motion.div>
    </div>
  );
}
