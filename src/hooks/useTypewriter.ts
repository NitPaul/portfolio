import { useState, useEffect, useCallback } from "react";

interface TypewriterOptions {
  lines: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export function useTypewriter({
  lines,
  typeSpeed = 60,
  deleteSpeed = 30,
  pauseDuration = 2000,
  loop = true,
}: TypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentLine = lines[lineIndex];

    if (!isDeleting) {
      if (charIndex < currentLine.length) {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        return typeSpeed;
      } else {
        return pauseDuration;
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(currentLine.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        return deleteSpeed;
      } else {
        const nextIndex = (lineIndex + 1) % lines.length;
        if (!loop && nextIndex === 0) return -1;
        setLineIndex(nextIndex);
        setIsDeleting(false);
        return typeSpeed;
      }
    }
  }, [
    lines,
    lineIndex,
    charIndex,
    isDeleting,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
    loop,
  ]);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    if (!isDeleting && charIndex === currentLine.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    const delay = tick();
    if (delay === -1) return;

    const timeout = setTimeout(() => {
      tick();
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, tick, lines, pauseDuration]);

  return displayText;
}
