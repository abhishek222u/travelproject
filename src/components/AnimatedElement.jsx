import React from 'react';
import { useViewportAnimation } from '../hooks/useViewportAnimation';

const AnimatedElement = ({ 
    children, 
    animationType = 'fadeIn',
    duration = 600,
    delay = 0,
    threshold = 0.1,
    rootMargin = '0px',
    easing = 'ease-out',
    className = '',
    style = {},
    ...props 
}) => {
    const elementRef = useViewportAnimation({
        animationType,
        duration,
        delay,
        threshold,
        rootMargin,
        easing
    });

    return (
        <div
            ref={elementRef}
            className={className}
            style={style}
            {...props}
        >
            {children}
        </div>
    );
};

export default AnimatedElement; 