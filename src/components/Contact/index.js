import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { StyledContactForm, Section } from "./ContactElements";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  
 const [position, setPosition] = useState("top-center");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
     setPosition("top-center");
      } else {
        setPosition("top-right");
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0jijetj",
        "template_nxs53gh",
        form.current,
        "3HiavubcB7ZffO62n"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          toast("sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Section id='contact' data-aos='fade-up'>
    <div className='section-title'>
      <h2>Contact</h2>
      <div className='section-line'></div>
    </div>
   
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" required />
      </form>
    </StyledContactForm>
    <ToastContainer
    position={position}
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />

      <div className='footer-line'></div>
    </Section>
    
  );
};

export default Contact;

