import React from "react";
import "./NavBar.css";
import {Link} from '@reach/router';

import {
    Nav,
    // NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements.js';
    
const Navbar = () => {
    return (
        // <Nav>
        //   <Bars />
        //   {/* <nav className="NavBar-container"></nav>
        //     <div className='NavBar-title'>MakeMyFit</div> */}
    
        //   <NavMenu>
        <>
        <nav className="NavBar-container" >
        <div className='NavBar-title'>MakeMyFit</div>
            <Link to='./NavBar.js'>
              Home
            </Link>
            
            <Link to='./MakeMyFit.js'>
              Make My Fit!
            </Link>
            <Link to='./MyItems.js'>
              My Items
            </Link>
            <Link to='./MyPastOutfits.js'>
              My past Outfits
            </Link>
            <Link to='./Weather.js'>
              Weather
            </Link>
            <Link to='./RandomShuffler.js'>
              Random Shuffler
            </Link>
            <Link to='./Inspo.js'>
              Inspo
            </Link>
            <Link to='./Login.js'>
              Login
            </Link>
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

