import React, { useState } from 'react';
import { IoMdCall, IoMdMail, IoMdPin, IoMdSend } from "react-icons/io";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "233fa925-0a1a-4795-a285-fc7af81ca46b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id='contact'
      className='min-h-screen bg-neutral-900 text-red-100 pt-10 p-5 md:p-10 flex flex-col gap-10'
    >
      <div className='w-full flex flex-col items-center justify-center gap-3 mb-10'>
        <h2 className='text-xl text-red-400 text-shadow uppercase'>GET IN TOUCH</h2>
        <h2 className='text-4xl text-neutral-50'>Contact Me</h2>
      </div>

      <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-15 grow'>
        <div className='flex flex-col items-start justify-start gap-10 col-span-2'>
          <div className='flex items-start gap-5'>
            <div className='text-bold rounded-lg text-red-400'>
              <IoMdCall size={30} />
            </div>
            <div>
              <h3 className='text-xl font-bold text-neutral-50'>Call us</h3>
              <p className='text-neutral-400 mt-1'>+93 799117595</p>
            </div>
          </div>

          <div className='flex items-start gap-5'>
            <div className='text-bold rounded-lg text-red-400'>
              <IoMdMail size={30} />
            </div>
            <div>
              <h3 className='text-xl font-bold text-neutral-50'>Email us</h3>
              <p className='text-neutral-400 mt-1'>sayedmojibsadat06@gmail.com</p>
            </div>
          </div>

          <div className='flex items-start gap-5'>
            <div className='text-bold rounded-lg text-red-400'>
              <IoMdPin size={30} />
            </div>
            <div>
              <h3 className='text-xl font-bold text-neutral-50'>Address</h3>
              <p className='text-neutral-400 mt-1 leading-relaxed'>
                Mostafiat Intersication, Herat, Afghanistan
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='flex flex-col gap-5 col-span-3'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className='bg-neutral-800 border-none text-xl outline-none p-4 rounded-lg text-neutral-200 focus:ring-2 focus:ring-red-400 transition-all placeholder:text-neutral-500'
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className='bg-neutral-800 border-none text-xl outline-none p-4 rounded-lg text-neutral-200 focus:ring-2 focus:ring-red-400 transition-all placeholder:text-neutral-500'
            />
          </div>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className='bg-neutral-800 border-none text-xl outline-none p-4 rounded-lg text-neutral-200 focus:ring-2 focus:ring-red-400 transition-all placeholder:text-neutral-500'
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            rows="6"
            className='bg-neutral-800 border-none text-xl outline-none p-4 rounded-lg text-neutral-200 focus:ring-2 focus:ring-red-400 transition-all custom-scrollbar placeholder:text-neutral-500'
          ></textarea>

          <div className='flex items-center justify-between'>
            <span className='text-sm text-red-400'>{result}</span>
            <button
              type="submit"
              className='flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-lg active:scale-95'
            >
              Send Message <IoMdSend size={20} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;