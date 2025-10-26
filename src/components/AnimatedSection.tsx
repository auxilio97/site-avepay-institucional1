import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, animation = 'fade-in-up' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

  const getInitialClasses = () => {
    switch (animation) {
      case 'fade-in-left':
        return 'opacity-0 -translate-x-10';
      case 'fade-in-right':
        return 'opacity-0 translate-x-10';
      case 'zoom-in':
        return 'opacity-0 scale-95';
      case 'fade-in-up':
      default:
        return 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-in-out',
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : getInitialClasses(),
        className
      )}
    >
      {children}
    </div>
  );
};