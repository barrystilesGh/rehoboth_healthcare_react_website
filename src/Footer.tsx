import "../src/Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer className='ft'>
        <div className='socials'>
          <h3 id='contactUs'>Get In Touch with Us</h3>
          <p>
            Discover the difference that personalized and compassionate home
            health care can make in your life. Contact Rehoboth Healthcare
            Professionals today to discuss your healthcare needs and explore how
            we can support your journey to wellness.
          </p>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/profile.php?id=61553894983507'
                target='_blank'
              >
                <span>
                  <i className='fa-brands fa-facebook'></i>
                </span>
              </a>
            </li>
            <li>
              <a href='http://'>
                <span>
                  <i className='fa-brands fa-instagram'></i>
                </span>
              </a>
            </li>
            <li>
              <a href='http://www.twitter.com/@rehoboth_health' target='_blank'>
                <span>
                  <i className='fa-brands fa-twitter'></i>
                </span>
              </a>
            </li>
          </ul>
          {/* <!-- Footer- Contact us --> */}
        </div>
        <div className='footer'>
          <div className='el'>
            <h3>
              <i className='fa-solid fa-phone'></i>
              Phone and Email
            </h3>
            <p>
              T:
              <a href='tel:+07553426873' target='_blank'>
                07553426873
              </a>
            </p>
            <p>
              E:
              <a href='mailto:info@rehoboth-health.co.uk' target='_blank'>
                info@rehoboth-health.co.uk
              </a>
            </p>
            <p>
              E:
              <a
                href='mailto:Recruitment@rehoboth-health.co.uk'
                target='_blank'
              >
                Recruitment@rehoboth-health.co.uk
              </a>
            </p>
          </div>
          <div className='el'>
            <h3>
              <i className='fa-solid fa-location-dot'></i>
              Physical Address
            </h3>
            <p>25 Booth Hall Road,</p>
            <p>M9 7bg,</p>
            <p>Manchester</p>
          </div>
          <div className='el'>
            <h3>Office Opening Hours</h3>
            <p>Mon-Fri: 9:00am-5:00pm</p>
            <p>Saturday: 8:00am-2pm</p>
            <p>Sunday:Closed</p>
          </div>
        </div>
        {/* <!-- Company details --> */}
        <div className='devDetails'>
          <p>
            Copyright &copy; 2023 rehoboth healthcare professionals, Registered
            in Manchester, Company Reg: 14391148 -All Rights Reserved
          </p>
          <p>Website Designed by Barry Stiles</p>
          <span>
            <i className='fa-solid fa-house'></i>
            <Link to='home' smooth={true} duration={300}>
              To Home
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
