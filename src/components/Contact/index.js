import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { StyledContactForm, Section, MainContainer } from "./ContactElements";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import mapboxgl from 'mapbox-gl';
  


const Contact = () => {
  
 const [position, setPosition] = useState("top-center");
//  mapboxgl.accessToken = 'pk.eyJ1Ijoic3ViaW5zZWJhc3RpYW43NzciLCJhIjoiY2xjbTN1MDg3MG9yZzN2czk2YjY1ZmxubCJ9.4OoOcYK935xhPfkTM0_2Ug';
//  const mapContainer = useRef(null);
// const map = useRef(null);
// const [lng, setLng] = useState(-76.593978);
// const [lat, setLat] = useState(44.2366404);
// const [zoom, setZoom] = useState(9);

// useEffect(() => {
//   if (map.current) return; // initialize map only once
//  map.current = new mapboxgl.Map({
//   container: mapContainer.current,
//   style: 'mapbox://styles/mapbox/navigation-night-v1',
//   center: [lng, lat],
//   zoom: zoom,
//   attributionControl: false
//   });
    
  
  
//   const marker = new mapboxgl.Marker()
//     .setLngLat([-76.593978, 44.2366404])
//     .addTo(map.current);

//   });

  

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on('move', () => {
//     setLng(map.current.getCenter().lng.toFixed(4));
//     setLat(map.current.getCenter().lat.toFixed(4));
//     setZoom(map.current.getZoom().toFixed(2));
//     });
//     });

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

    <MainContainer>
   
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

    {/* <div ref={mapContainer} className="map-container" /> */}
    </MainContainer>

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

