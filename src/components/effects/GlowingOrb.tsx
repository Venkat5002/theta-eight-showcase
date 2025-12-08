import { motion } from "framer-motion";

interface GlowingOrbProps {
  className?: string;
  color?: "primary" | "accent";
  size?: "sm" | "md" | "lg";
  delay?: number;
}

const GlowingOrb = ({ className = "", color = "accent", size = "md", delay = 0 }: GlowingOrbProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  const colorClasses = {
    primary: "bg-primary/30",
    accent: "bg-accent/30",
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

export default GlowingOrb;
