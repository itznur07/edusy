import React from "react";

const ContactForm = () => {
  return (
    <>
      <form className="mt-20">
        <input
          className='px-2 py-2 border rounded-sm outline-none mt-3'
          type='text'
          placeholder='Name'
        />
        <input
          className=' px-2 py-2 border rounded-sm outline-none ml-3'
          type='text'
          placeholder='Email'
        />
        <br />
        <input
          className='px-2 py-2 border rounded-sm outline-none mt-3'
          type='text'
          placeholder='Subject'
        />
        <br />
        <textarea
          className='outline-none border  px-2 mt-3'
          id=''
          cols='60'
          rows='10'
          placeholder='Message'
        ></textarea>
      </form>
    </>
  );
};


export default ContactForm;
