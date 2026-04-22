"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export function Typewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenTexts = 2000,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < texts[currentIndex].length) {
        // Humanize typing speed with a slight random variation
        const randomSpeed = typingSpeed + (Math.random() * 40 - 20);
        timeout = setTimeout(() => {
          setDisplayText(texts[currentIndex].slice(0, displayText.length + 1));
        }, randomSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isTyping,
    currentIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient font-bold">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="w-[2px] h-[1.2em] bg-purple-400 ml-1 inline-block align-middle"
      />
    </span>
  );
}
