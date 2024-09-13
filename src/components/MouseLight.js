import React, { useEffect, useRef } from 'react';

function MouseLight() {
  const mouseLightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mouseLightRef.current) {
        mouseLightRef.current.style.left = `${e.pageX}px`;
        mouseLightRef.current.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={mouseLightRef} className="mouse-light"></div>;
}

export default MouseLight;