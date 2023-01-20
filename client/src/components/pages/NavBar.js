import React from "react";
import "./NavBar.css";
import {Link} from '@reach/router';



    
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
            
            <Link to='/suggest_outfit'>
              Make My Fit!
            </Link>
            <Link to='/MyItems'>
              My Items
            </Link>
            <Link to='/MyPastOutfits'>
              My past Outfits
            </Link>
            <Link to='/weather'>
              Weather
            </Link>
            <Link to='/RandomShuffler'>
              Random Shuffler
            </Link>
            <Link to='/Inspo'>
              Inspo
            </Link>
            <Link to='/Login'>
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

