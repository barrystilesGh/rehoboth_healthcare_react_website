import "../src/MissionAndServices.css";
import { Link } from "react-router-dom";

const MissionAndService = () => {
  return (
    <div>
      {/* <!-- Mission and services --> */}
      <div className='mission-statement'>
        <div id='tabs'>
          <ul>
            <li>
              <a href='#tab1' className='visibleBtn'>
                Our Mission
              </a>
            </li>
            <li>
              <Link to='#tab2'>Our Team</Link>
            </li>
            <li>
              <a href='#tab3'>Our services</a>
            </li>
            <li>
              <a href='#tab4'>Our Values</a>
            </li>
          </ul>
          <div className='visible' id='tab1'>
            <p>
              At Rehoboth healthcare professionals, our mission is to provide
              compassionate and personalized home health care services to our
              clients. We strive to improve the quality of life for those we
              serve, while prioritizing their safety and well-being. We are
              professionals who truly care.
            </p>
          </div>
          <div className='hidden' id='tab2'>
            <p>
              Our team of skilled and experienced professionals is dedicated to
              delivering the highest quality of care and support to our clients.
              We work closely with family and caregivers to ensure that our
              services meet the unique needs of each individual.
            </p>
          </div>
          <div className='hidden' id='tab3'>
            <p>
              We offer a wide range of home health care services, including
              skilled nursing, physical therapy, occupational therapy, speech
              therapy, and more. Our goal is to help our valued clients maintain
              their independence and achieve their health and wellness goals.
            </p>
          </div>
          <div className='hidden' id='tab4'>
            <p>
              <strong>
                By offering person-centered services, we hope to uphold each
                client's dignity by giving them the necessary tools to make
                decisions about their lives. We accomplish this by:
              </strong>
              <br />
              <br />
              - Always treating with respect everyone who is under our care and
              our employees.
              <br />
              - Encouraging each service user to make their own decisions and
              exercising their right to do so.
              <br />
              - Upholding and promoting each client's right to freedom.
              <br />- Ensuring that every person's right to privacy is upheld at
              all times and treating all client information with
              confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndService;
