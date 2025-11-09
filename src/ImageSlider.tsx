import "../src/ImageSlider.css";

type CtaData = {
  key: string;
  status: string;
  title: string;
  content: string;
}[];

const ImageSlider = () => {
  const ctaData: CtaData = [
    {
      key: "001",
      status: "Recruiting",
      title: " Nurses, Care Assistants & Support Workers",
      content:
        "We pride ourselves with the quality of service we provide to our clients.",
    },
    {
      key: "002",
      status: "",
      title: " Nurses, Care Assistants & Support Workers",
      content:
        " At Rehoboth Healthcare Professionals, we are honored to be a part of our clients' success stories and are committed to making a positive difference in every home we serve.",
    },
    {
      key: "003",
      status: "",
      title: " Tailored Solutions.",
      content:
        "We understand that each individual's health needs are unique. Our team collaborates with clients and their families to develop personalized care plans that address specific concerns and goals.",
    },
    {
      key: "004",
      status: " Recruiting",
      title: "Professional Excellence.",
      content:
        " With a commitment to the highest standards of care, our healthcare professionals bring expertise and dedication to every service we offer.",
    },
    {
      key: "004",
      status: " ",
      title: "Contact Us",
      content:
        " Discover the difference that personalized and compassionate home health care can make in your life. Contact Rehoboth Healthcare Professionals today to discuss your healthcare needs and explore how we can support your journey to wellness.",
    },
  ];

  return (
    <div>
      {/* <!-- Image slider --> */}
      <div className='slider'>
        <div className='slide-wrapper'>
          <div className='slideItem'>
            {ctaData.map((cta) => (
              <div key={cta.key} className='cta'>
                <p>
                  {cta.status}
                  <span>
                    <span className='pulse pulse1'></span>
                    <span className='pulse pulse2'></span>
                    <span className='pulse pulse3'></span>
                  </span>
                </p>
                <h3 className='calltoaction'>{cta.title}</h3>
                <p>{cta.content}</p>
              </div>
            ))}
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
      </div>
    </div>
  );
};

export default ImageSlider;
