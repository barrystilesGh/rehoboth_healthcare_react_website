import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className='navigation'>
      <ul className='nav-link'>
        <li>
          <Link to='home' smooth={true} duration={500} className='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='aboutUs' smooth={true} duration={500} className='nav-link'>
            About Us
          </Link>
        </li>
        <li>
          <Link
            to='ourServices'
            smooth={true}
            duration={500}
            className='nav-link'
          >
            Our Services
          </Link>
        </li>
        <li>
          <Link
            to='contactUs'
            smooth={true}
            duration={500}
            className='nav-link'
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
