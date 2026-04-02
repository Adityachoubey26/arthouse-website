import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    let rafId;
    const update = () => {
      // Smoother lerp for the ring, faster for the dot
      dotPos.current.x = mousePos.current.x;
      dotPos.current.y = mousePos.current.y;
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(update);

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.transform += ' scale(2.5)';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.transform += ' scale(1)';
      if (ringRef.current) ringRef.current.style.opacity = '0.4';
    };

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor pointer-events-none fixed z-[9999] hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring pointer-events-none fixed z-[9998] hidden md:block" />
    </>
  );
};

export default CustomCursor;
