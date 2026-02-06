import React from 'react'
import { IoMdCall, IoMdMail, IoMdPin, IoMdSend } from "react-icons/io";

function ContactForm({ onSubmit, result }) {
    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-5 col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className='bg-neutral-900 border-none text-xl outline-none p-4 rounded-lg text-neutral-200 focus:ring-2 focus:ring-red-400 transition-all placeholder:text-neutral-500'
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className='bg-neutral-900 border-none text-xl outline-none p-4 rounded-lg text-neutral-200 focus:ring-2 focus:ring-red-400 transition-all placeholder:text-neutral-500'
                />
            </div>
            <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className='bg-neutral-900 border-none text-xl outline-none p-4 rounded-lg text-neutral-200 focus:ring-2 focus:ring-red-400 transition-all placeholder:text-neutral-500'
            />
            <textarea
                name="message"
                required
                placeholder="Message"
                rows="6"
                className='bg-neutral-900 border-none text-xl outline-none p-4 rounded-lg text-neutral-200 focus:ring-2 focus:ring-red-400 transition-all custom-scrollbar placeholder:text-neutral-500'
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
    )
}

export default ContactForm