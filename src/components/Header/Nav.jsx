import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


function NavBar() {
    return ( 
        <div>
            <Navbar color='danger' dark >
                 <div className="container">
                    <NavbarBrand href="/">ReactFood</NavbarBrand>
                 </div>
            </Navbar>
        </div>
     );
}

export default NavBar;
 