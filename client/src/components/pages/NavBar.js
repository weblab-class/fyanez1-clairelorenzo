import React from "react";
import "./NavBar.css";
import {Link} from '@reach/router';
import './navbarlogo.css'
import './Login.css'
import logoicon from '../../public/logoicon.png'
import { GoogleOAuthProvider, GoogleLogin, googleLogout} from "@react-oauth/google";
const GOOGLE_CLIENT_ID = "562487959153-1uimctimfrsv1m8tsus87j34mfbvg6hu.apps.googleusercontent.com";


    
const Navbar = (props) => {
    return (
        // <Nav>
        //   <Bars />
        //   {/* <nav className="NavBar-container"></nav>
        //     <div className='NavBar-title'>MakeMyFit</div> */}
    
        //   <NavMenu>
        <>
        <nav className="NavBar-container" >
        <img src={logoicon} className='navbarlogo'></img>
        <div className='NavBar-title'>MakeMyFit</div>
            <Link className= 'NavBar-link' to='/home'>
              Home
            </Link>
            
            <Link className= 'NavBar-link' to='/suggest_outfit'>
              Make My Fit!
            </Link>
            <Link className= 'NavBar-link' to='/MyItems'>
              My Items
            </Link>
            <Link className= 'NavBar-link' to='/MyPastOutfits'>
              My past Outfits
            </Link>
            <Link className= 'NavBar-link' to='/weather'>
              Weather
            </Link>
            <Link className= 'NavBar-link' to='/RandomShuffler'>
              Random Shuffler
            </Link>
            
            <Link className= 'NavBar-link' to='/Inspo'>
              Inspo
            </Link>
            
            <button
          onClick={() => {
            googleLogout();
            props.logout();
          }}
        >
          Logout
        </button>

        </nav>
            
        </>
    //       </NavMenu>
    //       <NavBtn>
    //         <NavBtnLink to='./Login.js'>Sign In</NavBtnLink>
    //       </NavBtn>
    //     </Nav>
    );
};
    
export default Navbar;

// const NavBar = () => {
//     return (
//         <nav className="NavBar-container">
//             <div className='NavBar-title'>MakeMyFit</div>
//             <div className='NavBar-item'>Home</div>
//             <div className='NavBar-item'>Make My Fit!</div>
//             <div className='NavBar-item'>My Items</div>
//             <div className='NavBar-item'>My Past Outfits</div>
//             <div className='NavBar-item'>Weather</div>
//             <div className='NavBar-item'>Random Shuffler</div>
//             <div className='NavBar-item'>Inspo</div>

//         </nav>
//     );
// };
// export default NavBar

