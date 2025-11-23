import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";

const NavBar = () => {
  return (
    <nav className='navigation'>
      <ul className='nav-link'>
        <li>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Links to='aboutUs' smooth={true} duration={500} className='nav-link'>
            About Us
          </Links>
        </li>
        <li>
          <Links
            to='ourServices'
            smooth={true}
            duration={500}
            className='nav-link'
          >
            Our Services
          </Links>
        </li>
        <li>
          <Link to='/contactus' className='nav-link'>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
