"use client";
import React, { useEffect,useMemo } from "react";
import CloudL from "./SVGIcons/CloudL";
import CloudR from "./SVGIcons/CloudR";
import { motion } from "framer-motion";

export default function Clouds(): React.ReactElement {
  const screenWidth = useMemo(() => {
    if (typeof window !== "undefined") return window.innerWidth;
  }, []);
  return (
    <div className="">
      <motion.div
        initial={{ x: 0, y: -100 }}
        animate={{ x: screenWidth }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -500 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudL fill="#9a7a6a" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 0, y: -400 }}
        animate={{ x: screenWidth }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -500 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudL fill="#9a7a6a" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 0, y: -300 }}
        animate={{ x: screenWidth }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -300 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#9a7a6a" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 0, y: -400 }}
        animate={{ x: screenWidth }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -200 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#9a7a6a" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 0, y: -300 }}
        animate={{ x: screenWidth }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -100 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#9a7a6a" />
        </motion.div>
      </motion.div>

      {/* //right to left */}
      <motion.div
        initial={{ x: screenWidth, y: -300 }}
        animate={{ x: 0 }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -500 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudL fill="#9a7a6a" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth, y: -400 }}
        animate={{ x: 0 }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -500 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudL fill="#9a7a6a" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth, y: -300 }}
        animate={{ x: 0 }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -300 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#9a7a6a" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth, y: -400 }}
        animate={{ x: 0 }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -200 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#9a7a6a" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: screenWidth, y: -300 }}
        animate={{ x: 0 }}
        className="absolute z-0"
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        <motion.div
          initial={{ x: 0, y: -100 }}
          animate={{ scale: 1.2, opacity: 10 }}
          className="absolute z-0"
          transition={{
            type: "spring",
            duration: 5,
            damping: 0,
            repeat: Infinity,
          }}
        >
          <CloudR fill="#9a7a6a" />
        </motion.div>
      </motion.div>
    </div>
  );
}
