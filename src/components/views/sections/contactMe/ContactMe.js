import React, { useEffect, useRef, useState } from "react";
import "./ContactMe.css";
import emailjs from "emailjs-com";
import ScrollAnimations from "../../customs/ScrollAnimations";


const ContactMe = () => {
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  useEffect(() => {
    ScrollAnimations();
   }, []);

  useEffect(() => {
    setaddress("Ramat Gan");
    setphone("0536200540");
    setemail("ambarshely@gmail.com");
   
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4s7l24j",
        "template_l4gm2a8",
        form.current,
        "user_0qJsFgVNpdOzp1jT8wIFp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="ContactMe" className="contact-container">
      <h1 className="slide-in from-top">Contact Me</h1>
      <div className="contact-wrap">
        <div className="contact-in slide-in from-left">
          <h1>My Info</h1>
          <h2>
            Phone <i class="fas fa-phone"></i>
          </h2>
          <p>{phone}</p>
          <h2>
            Email <i class="far fa-envelope"></i>
          </h2>
          <p>{email}</p>
          <h2>
            Address <i class="fas fa-map-marker-alt"></i>
          </h2>
          <p>{address}</p>
          <ul>
            <li>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shelly-ambar-a96382146/",
                    "_blank"
                  )
                }
              >
                <i class="fab fa-linkedin"></i>
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/ShellyAmbar?tab=repositories",
                    "_blank"
                  )
                }
              >
                <i class="fab fa-github"></i>
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/user/shelllly1",
                    "_blank"
                  )
                }
              >
                <i class="fab fa-youtube"></i>
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open("https://wa.me/+972536200540", "_blank")
                }
              >
                <i class="fab fa-whatsapp"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="contact-in ">
          <h1>Send a Message</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              name="from_name"
              type="text"
              placeholder="Full Name"
              className="contact-in-input"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="contact-in-input"
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="contact-in-input"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="contact-in-textarea"
            ></textarea>
            <input type="submit" value="SUBMIT" className="contact-in-btn" />
          </form>
        </div>
        <div className="contact-in slide-in from-right">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64330.32843216031!2d34.85359277424437!3d32.07069814862351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2z16jXnteqINeS158!5e0!3m2!1siw!2sil!4v1644179118150!5m2!1siw!2sil"
            width="100%"
            height="auto"
            allowFullScreen=""
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
