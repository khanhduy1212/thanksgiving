import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
export default function NavList() {
  const navRef= useRef();
  const showNabar =()=>{
    navRef.current.classList.toggle(
      "resposive_nav"
    );
  }
  return (
    <>
 
    <nav ref={navRef} >
     <ul className="nav-list"> 
      <li><a href="/">Thinksgiving Oxley</a></li>
      <li><a href="/">Thanksgiving Cantonment</a></li>
      <li><a href="/">About Us</a></li>
      <li><a href="/">Blog</a></li>
      <li><a href="/">Contact Us</a></li>
      </ul>
      </nav>
       <button className="nav-close-btn" onClick={showNabar}>
      <FontAwesomeIcon icon={faTimes}/>
      </button>
 

    <button className="nav-btn" onClick={showNabar}>
    <FontAwesomeIcon icon={faBars} />
    
    </button> 
    </>
  );
}