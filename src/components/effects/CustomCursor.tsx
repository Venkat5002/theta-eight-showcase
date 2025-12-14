import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Add class to body to hide native cursor
    document.body.classList.add("custom-cursor-active");

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const element = document.elementFromPoint(mousePosition.x, mousePosition.y);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        setIsPointer(
          computedStyle.cursor === "pointer" ||
            element.tagName === "BUTTON" ||
            element.tagName === "A" ||
            element.closest("button") !== null ||
            element.closest("a") !== null
        );
      }
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", updateCursorType);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateCursorType);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mousePosition.x, mousePosition.y]);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent mix-blend-difference pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {/* Trail cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary/50 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.8 : 1,
          opacity: isPointer ? 0.5 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default CustomCursor;
