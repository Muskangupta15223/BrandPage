import React from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{

    return <div>
   <nav>
  <div className="logo"> 
<img src ="/images/nike_logo.png" alt="Logo"/>
  </div>
    <ul>
     <li href = "#">HOME</li>
      <li href = "#">LOCATION</li>
      <li href = "#">ABOUT</li>
      <li> <Link to="/Contact">CONTACT</Link></li> 
    </ul>
<div className='btn'>  
  <Link to ="/Login"><button className ="login">login</button></Link>
  <Link to ="/SignUp"><button className ="signup">SignUp</button></Link>
  </div>
  </nav>
        
    </div>
}
export default Header;