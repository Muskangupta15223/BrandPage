import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedComponent = () => {
  const boxRef = useRef(1);
  const imgRef = useRef(null);
  useEffect(() => {
    // Animate the box when the component mounts
    gsap.to(boxRef.current, { x: 200, duration: 2, ease: "power2.out" });
    gsap.to(imgRef.current, { rotation: 360, duration: 2,x:400, ease: "power2.out" });

  }, []);

  return (
    <div>

        <div className="myimg">
        <img
          ref={imgRef} // Attach the ref to the image
          src="./images/shoe_image.png"
          alt="Shoe"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      </div>
  );
};

export default AnimatedComponent;


