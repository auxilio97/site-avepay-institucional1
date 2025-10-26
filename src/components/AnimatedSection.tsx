import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-in-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
};