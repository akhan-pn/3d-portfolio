import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:khanayman080@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                khanayman080@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/mohammed-ayman-khan-370319263/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — mohammed-ayman-khan
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science, Ellenki College of Engineering and
              Technology, Hyderabad — 2023–Present
            </p>
            <p>
              Diploma in Computer Science, Ellenki College of Engineering and
              Technology, Hyderabad — 2020–2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/akhan-pn"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-ayman-khan-370319263/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/k7_ayman"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter / X <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/ayman.drafs"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ayman Khan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
