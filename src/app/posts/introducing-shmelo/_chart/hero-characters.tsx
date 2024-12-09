import { AnimatePresence, motion, useInView } from "framer-motion";
import Queen from "./_assets/queen";
import Racket from "./_assets/racket";
import Sword from "./_assets/sword";
import King from "./_assets/king";
import { useRef } from "react";

const baseDelay = 0.2;

const fadeInUpAnimation = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
};

const iconTransition = {
  mass: 1,
  type: "spring",
};

function AnimatedIcon({
  children,
  delay,
  className,
  animate,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  animate: boolean;
}) {
  return (
    <motion.div
      initial={fadeInUpAnimation.initial}
      animate={animate ? fadeInUpAnimation.animate : {}}
      transition={ { ...iconTransition, delay: baseDelay + delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroCharacters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  console.log(isInView);

  return (
    <div
      ref={ref}
      className="flex gap-4 items-end"
    >
      <AnimatedIcon delay={0} animate={isInView} >
        <Queen className="h-20" />
      </AnimatedIcon>

      <AnimatedIcon delay={0.2} animate={isInView} className={`mr-4`}>
        <Racket className="h-16" />
      </AnimatedIcon>

      <AnimatedIcon delay={0.3} animate={isInView}>
        <Sword className="h-16 scale-x-[-1]" />
      </AnimatedIcon>

      <AnimatedIcon delay={0.1} animate={isInView}>
        <King className="h-20 scale-x-[-1]" />
      </AnimatedIcon>
    </div>
  );
}
