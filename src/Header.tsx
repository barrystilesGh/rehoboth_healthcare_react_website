import Logo from "../src/assets/images/Rehoboth logo.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className='hero hd' id='home'>
        <div className='companyName_Logo'>
          <figure className='logo'>
            <img src={Logo} alt='Companylogo' width='50' height='50' />
          </figure>
          <div>
            <h1 className='company_name'>
              <span className='companyName_blue'>REHOBOTH HEALTHCARE</span>
              PROFESSIONALS
            </h1>
            <p className='motto'>Health Professionals who truly care.</p>
          </div>
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
