import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


function NavBar() {
    return ( 
        <div>
            <Navbar color='danger' dark >
                <NavbarBrand href="/">ReactFood</NavbarBrand>
            </Navbar>
        </div>
     );
}

export default NavBar;
 