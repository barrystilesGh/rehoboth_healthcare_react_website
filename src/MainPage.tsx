import NurseAndPatient from "../public/images/nurseandpatient.jpeg";
import HoldingOfHands from "../public/images/holdingof-hands.jpg";
import BPChecking from "../public/images/bp-checking.jpg";
import MotherAndDaugther from "../public/images/mother-and-daughter.jpg";
import CareHome from "../public/images/care-home.jpg";
import "../src/MainPage.css";
import { Link } from "react-scroll";

const MainPage = () => {
  return (
    <main className='container mn'>
      <div className='inner-container ourCare'>
        <figure className='figure'>
          <img
            src={NurseAndPatient}
            alt='checking of bp'
            width='400px'
            height='400px'
          />
        </figure>
        <div className='careH'>
          <h2 className='careHeader'>Hourly Visiting Care</h2>
          <p>
            Supporting with daily activities to maintain your independence at
            home.
            <br />
            Personal care medication, shopping, meal preparation
          </p>
          <Link id='link' to='home' smooth={true} duration={500}>
            READ MORE
          </Link>
        </div>
      </div>

      <div className='inner-container'>
        <h1>A reputable brand</h1>
        <div className='flexContainer'>
          <div className='card'>
            <div className='image'>
              <figure>
                <img
                  src={HoldingOfHands}
                  alt='care home'
                  title='A nurse and her patient'
                  width='200'
                  height='200'
                />
              </figure>
            </div>
            <div>
              <h2>Professional & Reliable</h2>
              <p>
                From the service we provide to our staff, and to the experience
                of our clientele, we stand for quality
              </p>
              <Link id='link2' to='home' smooth={true} duration={500}>
                Find Out More
              </Link>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <figure>
                <img
                  src={BPChecking}
                  title='BP-checking'
                  width='200'
                  height='200'
                />
              </figure>
            </div>
            <div>
              <h2>Our Service Standard</h2>
              <p>
                Rehoboth Healthcare Professionals is your industry specialist
                recruiter for the care and health industry
              </p>
              <Link id='link2' to='home' smooth={true} duration={500}>
                Find Out More
              </Link>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <figure>
                <img
                  src={MotherAndDaugther}
                  alt='care home'
                  title='A patient and her daughter'
                  width='200'
                  height='200'
                />
              </figure>
            </div>
            <div>
              <h2>Quality Personal Service</h2>
              <p>
                We recruit and deliver our services nationwide, supplying staff
                within all areas and specialities of the healthcare and domestic
                sector
              </p>
              <Link id='link2' to='home' smooth={true} duration={500}>
                Find Out More
              </Link>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <figure>
                <img
                  src={CareHome}
                  alt='care home'
                  title='concern staff'
                  width='200'
                  height='200'
                />
              </figure>
            </div>
            <div>
              <h2>Professional Excellence.</h2>
              <p>
                With a commitment to the highest standards of care, our
                healthcare professionals bring expertise and dedication to every
                service we offer.
              </p>
              <Link id='link2' to='home' smooth={true} duration={500}>
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- The aboout section of the business --> */}
      <div className='inner-container sectionDiv'>
        <section className='about_page'>
          <h2 id='aboutUs'>About Rehoboth Healthcare Professionals</h2>
          <p>
            Welcome to Rehoboth Healthcare Professionals, where compassionate
            care meets professional excellence. At Rehoboth, we are committed to
            providing comprehensive and personalized home health care services
            to enhance the well-being and independence of our clients.
          </p>
          <br />
          <h3 className='h3'>Why Choose Rehoboth Healthcare Professionals?</h3>
          <p>
            <strong>Compassionate Care:</strong>
            <em>
              Our team is driven by a genuine passion for helping others. We
              approach each client with empathy and understanding, creating a
              supportive environment for healing.
            </em>
            <br />
            <br />
            <strong>Professional Excellence:</strong>
            <em>
              With a commitment to the highest standards of care, our healthcare
              professionals bring expertise and dedication to every service we
              offer.
            </em>
            <br />
            <br />
            <strong>Tailored Solutions:</strong>
            <em>
              We understand that each individual's health needs are unique. Our
              team collaborates with clients and their families to develop
              personalized care plans that address specific concerns and goals.
            </em>
            <br />
            <br />
            <strong>Home-Based Convenience:</strong>
            <em>
              Rehoboth Healthcare Professionals brings healthcare services to
              the comfort of your home, promoting a familiar and conducive
              environment for recovery.
            </em>
          </p>
          <Link id='link3' to='aboutUs' smooth={true} duration={500}>
            READ MORE
          </Link>
        </section>

        {/* <!-- Links to about us page --> */}
        <section>
          <Link id='link1' to='ourServices' smooth={true} duration={500}>
            Are you looking for Work?
          </Link>
          <Link id='link1' to='ourServices' smooth={true} duration={500}>
            Are you looking for Staffing?
          </Link>
          <Link id='link1' to='aboutUs' smooth={true} duration={500}>
            Know more About Us
          </Link>
        </section>
      </div>
      {/* <!-- Testimonials --> */}
      <div className='testimonials inner-container'>
        <h2>Our Clients Feedback</h2>
        <br />
        <h4>Your Journey, Our Priority</h4>
        <br />
        <p>
          These testimonials reflect the dedication of our team to provide
          personalized, high-quality care that goes beyond the expected. At
          Rehoboth Healthcare Professionals, we are honored to be a part of our
          clients' success stories and are committed to making a positive
          difference in every home we serve.
          <br />
          <br />
          Contact us today to experience the compassionate and expert care that
          has earned the trust and gratitude of our valued clients.
        </p>
        <div className='testimonies'>
          <div className='testimony card2'>
            <p>
              <q>
                As the primary caregiver for my aging parents, finding reliable
                assistance for their personal care became a crucial aspect of
                maintaining their well-being and independence. Thankfully, we
                discovered the invaluable service provided by Rehoboth
                healthcare professionals. Their compassionate and dedicated team
                understands the unique challenges that come with aging, offering
                unwavering support for both physical and mental well-being..
              </q>
            </p>
            <span>- John P., A family member of an Aged Patient</span>
          </div>
          <div className='testimony card2'>
            <p>
              <q>
                My mother, Mrs. Eleanor Smith, has been a recipient of this
                invaluable service, and the impact on her well-being has been
                truly remarkable. Opting for live-in care was a decision rooted
                in our desire to ensure Mom's comfort and dignity while
                receiving the round-the-clock care she needed. From the outset,
                Rehoboth Healthcare Professionals impressed us with their
                commitment to tailoring their services to meet Mom's specific
                requirements.
              </q>
            </p>
            <span>- Lucy Quist, Daughter of Mrs. Eleanor Smith</span>
          </div>
          <div className='testimony card2'>
            <p>
              <q>
                The decision to opt for night care was driven by the need for
                reassurance during the nighttime hours. Rehoboth Healthcare
                Professionals stood out for their unique approach of having a
                dedicated care assistant stay on the premises for at least eight
                hours each night, offering not only a sense of security but also
                immediate assistance in case of emergencies. Having a
                compassionate care assistant by my side has alleviated both
                anxiety and sleep-related concerns.
              </q>
            </p>
            <span>- Robert H., Recipient of Night Care Services</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
