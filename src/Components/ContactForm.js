import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    alert('Your form submited ✅')
    console.log(data);

  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex gap-2">
            <div>
              <input
                {...register("name", {
                  required: true,
                  min: "5",
                  max: "15",
                })}
                className='px-2 py-2 border rounded-sm outline-none'
                type='text'
                placeholder='Name'
              />
              <span>
                {errors.name?.type === "required" && (
                  <p role='alert' className="text-sm text-red-600">*Name is required</p>
                )}
              </span>
            </div>
            <div>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className=' px-2 py-2 border rounded-sm outline-none '
                type='text'
                placeholder='Email'
              />
              <span>
                {errors.email?.type === "required" && (
                  <p role='alert' className="text-sm text-red-600">*email is required</p>
                )}
              </span>
            </div>
          </div>
          <br />
          <input
            {...register("subject", {required: true, max: 50 })}
            className='px-2 py-2 border rounded-sm outline-none '
            type='text'
            placeholder='Subject'
          />
          <br />
          <textarea
            {...register("message", {
              required: true,
              min: 10,
              max: 80,
            })}
            className='outline-none border  px-2 mt-3'
            id=''
            cols='60'
            rows='10'
            placeholder='Message'
          ></textarea>
          <br />
          <button
            type='submit'
            className='px-6 py-2 rounded-sm border-none outline-none bg-[#1eb2a6] text-[#fff] my-6'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
