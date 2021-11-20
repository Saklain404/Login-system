import React, { useContext } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const Header = () => {
  const context = useContext (UserContext);

  return (
    <Navbar className="navBar" color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white m-5">Saklain</Link>
      </NavbarBrand>
     
     
        <Nav className="ml-auto" navbar>
          { ( context.user && context.user.token)? (
        <NavItem>
        <NavLink className="text-white ml-5 "  onClick={() => context.setUser(null)}  > Logout</NavLink>
      </NavItem>
        ) : (
          <>
          <NavItem>
            <NavLink className="text-white " tag={Link} to="/signup">SignUp</NavLink>
          </NavItem>
          <NavItem>
          <NavLink className="text-white "  tag={Link} to="/signin"> SignIn</NavLink>
        </NavItem>
        </>
          

        )}
          
          
          
        </Nav>
      {/* </Collapse> */}
    </Navbar>
  );
}

export default Header;
