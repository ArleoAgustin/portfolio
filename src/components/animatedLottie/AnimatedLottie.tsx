import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import "./AnimatedLottie.css";
interface AnimatedLottieProps {
  animationData: object;
  className?: string;
  loop?: boolean;
  initialSegment?: [number, number];
  threshold?: number;
  hideOnComplete?: boolean;
  completedClassName?: string;
}

function AnimatedLottie({
  animationData,
  className,
  loop = false,
  initialSegment,
  threshold = 0,
  hideOnComplete = false,
  completedClassName = "completedAnimation",
}: AnimatedLottieProps) {
  const lottieInstanceRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCompleted(false); // Restablece el estado al volver a la vista
            if (initialSegment) {
              lottieInstanceRef.current?.playSegments(initialSegment, true);
            } else {
              lottieInstanceRef.current?.goToAndPlay(0);
            }
          }
        });
      },
      { threshold }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [initialSegment, threshold]);

  const handleComplete = () => {
    if (hideOnComplete) {
      setIsCompleted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${className} ${
        isCompleted && completedClassName ? completedClassName : ""
      }`}
    >
      <Lottie
        lottieRef={lottieInstanceRef}
        animationData={animationData}
        loop={loop}
        autoplay={false}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default AnimatedLottie;
