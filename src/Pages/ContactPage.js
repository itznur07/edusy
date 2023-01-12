import React from "react";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import MapContainer from "../Components/MapContainer";
import Newsletter from "../Components/Newsletter";
import RouteHead from "./RouteHead";

const ContactPage = () => {
  return (
    <>
      <RouteHead headingtext='Contact us' subheadingtext='contact' />
      <div className="flex justify-between mx-24">
        <ContactForm />
        <MapContainer />
      </div>
      <div className='mt-28'>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
