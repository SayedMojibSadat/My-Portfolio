import React from 'react'
import { IoMdCall, IoMdMail, IoMdPin, IoMdSend } from "react-icons/io";

function ContactData() {
    return (
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
    )
}

export default ContactData