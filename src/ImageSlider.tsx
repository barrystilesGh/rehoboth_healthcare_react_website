import "../src/ImageSlider.css";
const ImageSlider = () => {
  return (
    <div>
      {/* <!-- Image slider --> */}
      <div className='slider'>
        <div className='slide-wrapper'>
          <div className='slideItem'>
            <div className='cta'>
              <p>
                Recruiting
                <span>
                  <span className='pulse pulse1'></span>
                  <span className='pulse pulse2'></span>
                  <span className='pulse pulse3'></span>
                </span>
              </p>
              <h3 className='calltoaction'>
                Nurses, Care Assistants & Support Workers
              </h3>
              <p>
                We pride ourselves with the quality of service we provide to our
                clients.
              </p>
              {/* <!-- <div className="link">
                       <ul>
                        <li>
                           <a href="" target="_blank">
                            Learn More
                          </a>
                        </li>
                        <li>
                           <a href="" target="_blank">
                            Get In Touch
                          </a>
                        </li>
                      </ul>
                    </div> --> */}
            </div>
          </div>
          <div className='slideItem'>
            <div className='cta'>
              <h3 className='calltoaction'>Your Journey, Our Priority</h3>
              <p>
                At Rehoboth Healthcare Professionals, we are honored to be a
                part of our clients' success stories and are committed to making
                a positive difference in every home we serve.
              </p>
            </div>
          </div>
          <div className='slideItem'>
            <div className='cta'>
              <h3 className='calltoaction'>Tailored Solutions.</h3>
              <p>
                We understand that each individual's health needs are unique.
                Our team collaborates with clients and their families to develop
                personalized care plans that address specific concerns and
                goals.
              </p>
            </div>
          </div>
          <div className='slideItem'>
            <div className='cta'>
              <p>
                <strong>
                  Recruiting
                  <span>
                    <span className='pulse pulse1'></span>
                    <span className='pulse pulse2'></span>
                    <span className='pulse pulse3'></span>
                  </span>
                </strong>
              </p>
              <h3 className='calltoaction'>Professional Excellence.</h3>
              <p>
                With a commitment to the highest standards of care, our
                healthcare professionals bring expertise and dedication to every
                service we offer.
              </p>
            </div>
          </div>
          <div className='slideItem'>
            <div className='cta'>
              <h3 className='calltoaction'>Contact Us</h3>
              <p>
                Discover the difference that personalized and compassionate home
                health care can make in your life. Contact Rehoboth Healthcare
                Professionals today to discuss your healthcare needs and explore
                how we can support your journey to wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
