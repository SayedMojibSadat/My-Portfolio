import React, { useState } from 'react';
import { IoMdCall, IoMdMail, IoMdPin, IoMdSend } from "react-icons/io";
import ContactData from '../components/ContactData';
import ContactForm from '../components/ContactForm';

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
      className='min-h-screen bg-neutral-800 text-red-100 pt-10 p-5 md:p-10 flex flex-col gap-10'
    >
      <div className='w-full flex flex-col items-center justify-center gap-3 mb-10'>
        <h2 className='text-xl text-red-400 text-shadow uppercase'>GET IN TOUCH</h2>
        <h2 className='text-4xl text-neutral-50'>Contact Me</h2>
      </div>

      <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-15 grow'>
        <ContactData />
        <ContactForm onSubmit={onSubmit} result={result} />
      </div>
    </section>
  );
}

export default Contact;