import { useEffect, useRef, useState, type JSX, type RefObject } from "react";
import "../src/ImageSlider.css";

type CtaData = {
  key: string;
  status: string;
  title: string;
  content: string;
}[];

const ImageSlider = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

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
      key: "005",
      status: " ",
      title: "Contact Us",
      content:
        " Discover the difference that personalized and compassionate home health care can make in your life. Contact Rehoboth Healthcare Professionals today to discuss your healthcare needs and explore how we can support your journey to wellness.",
    },
  ];
  useEffect(() => {
    let rotator = setInterval(() => {
      setActiveSlide((prev) => {
        return (prev += 1) % ctaData.length;
      });
    }, 10000);

    return () => clearInterval(rotator);
  }, []);

  return (
    <div>
      {/* <!-- Image slider --> */}
      <div className='slider'>
        <div
          className='slide-wrapper'
          style={{ transform: `translateX(-${activeSlide * 100}vw)` }}
          onMouseEnter={() => {
            setActiveSlide(activeSlide);
          }}
          onMouseLeave={() => {
            setActiveSlide((prev) => {
              return (prev = 0);
            });
          }}
        >
          {ctaData.map((cta) => (
            <div key={cta.key} className='slideItem'>
              <div className='cta'>
                <p>
                  {cta.status}
                  {cta.status === "Recruiting" ? (
                    <span>
                      <span className='pulse pulse1'></span>
                      <span className='pulse pulse2'></span>
                      <span className='pulse pulse3'></span>
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                <h3 className='calltoaction'>{cta.title}</h3>
                <p>{cta.content}</p>
              </div>
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
  );
};

export default ImageSlider;
