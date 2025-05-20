import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ShopNow from './shopNow';
const Hero =() =>{
     const imgRef = useRef(null);
      useEffect(() => {
        gsap.to(imgRef.current, { rotation: 360, duration: 13,x:'-2100px',y:'-40vh',ease: "rough" });
        // gsap.to(imgRef2.current, { rotation: 360, duration: 13, x:'2200px' ,ease: "linear",repeat:-1, yoyo:true });// gsap.from(imgRef.current, { rotation: 360, duration: 19, x:'-500px',y:'-5px' ,ease: "linear",repeat:-1 });
      }, []);
 
    return <div className="hero">
    <div className = "part1">
        <h1 className="line1">YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      
        <div className='btn'>
        <ShopNow/>
        <button className="category"> Category</button>
        </div>
     
        <p id="avl">ALso Available On</p>
        <div className="small_container">
            <img src ="/images/flipkart.png" alt="Logo"/>
            <img src ="/images/amazon.png" alt="Logo"/>
        </div>
        </div>
        <div className = "part2">
        <img src="./images/shoe_image.png" alt="Shoe" className="shoe_image" />

        <img
          ref={imgRef} // Attach the ref to the image
          src="./images/shoe_image.png"
          alt="Shoe"
          style={{ width: '30vw', height: '40vh' , transform: 'translate(240%,-60vh)'}} // Initial position
        />
        {/*  */}
        </div>
    </div>

}
export default Hero;