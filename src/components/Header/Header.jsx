import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {useState}  from 'react'
import {Link} from "react-scroll";
const Header = () => {
  const mobile=window.innerWidth<=768 ? true:false;
  const [menuOpened,setMenuOpened]=useState(false)
  return (
    <div className="header">

<img src={Logo} alt="" className='logo'/>
{menuOpened === false && mobile === true ?(
<div style={{backgroundColor:'var(--appColor)',
padding:'0.5rem',borderRadius:'5px',
}}
 onClick={()=>setMenuOpened(true)}>
  <img
   src={Bars} 
   alt="" 
   style={{width:'1.5rem',height:'1.5rem'}} 
   />
</div>
):(

<ul className='header-menu'>
  <li>
    <Link 
    onClick={()=>setMenuOpened(false)}
    activeClass="active"
    className="link1"
    to='header'
    spy={true}
    smooth={true} 
    >Home</Link>
    </li>

  <li><Link 
   onClick={()=>setMenuOpened(false)}
   className="link2"
   to='programs'
   spy={true}
   smooth={true} 
   >Programs</Link>
   </li>


  
  <li><Link 
  onClick={()=>setMenuOpened(false)}
  className="link3"
  to="reasons"
  spy={true}
   smooth={true} 
 >Why us </Link>
 </li>


  <li><Link
   onClick={()=>setMenuOpened(false)}
   className="link4"
    to="plans"
    spy={true}
     smooth={true} 
 >Plans </Link>
 </li>


    
    <li><Link
    onClick={()=>setMenuOpened(false)}
    className="link4"
  to='testimonials'
  spy={true}
  smooth={true} 
  >Testimonials</Link></li>


</ul>
)}
    </div>
  );
} ;

export default Header