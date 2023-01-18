import React from "react";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import RouteHead from "./RouteHead";

const ContactPage = () => {
  return (
    <>
      <RouteHead headingtext='Contact us' subheadingtext='contact' />
      <div className='flex gap-5 mx-24'>
        <div className='mt-20'>
          <ContactForm />
        </div>
      </div>
      <div className='mt-28'>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
