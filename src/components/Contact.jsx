import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_43dw5z7', 'template_j4em5q9', formRef.current, 'ZE2RxD8YiJABJAzs1')
      .then((result) => {
        setError(false);
        alert('Message submitted successfully!');
        formRef.current.reset();
      }, (error) => {
        setError(true);
        alert('Error submitting the message. Please try again.');
      });
  };

  return (

    <div className='max-w-4xl mx-auto sm-py-20 p-5 pt-24' id='contact'>
      <div className='flex flex-row items-center justify-center mb-6'>
        <h2 className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600' id="contact">Contact Me</h2>
        <div className='h-1 w-32 border border-orange-600 ml-6 bg-orange-600'></div>
      </div>

      <div className=''>
        <div className='mt-6 rounded-xl'>
          <div className='p-10 bg-[#161626] rounded-xl'>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className='grid gird-col-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                <div>
                  <div className='mt-2.5 relative'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Your Name'
                      className='w-full px-4 py-4 placeholder-gray-400 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className='mt-2.5 relative'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Your Email'
                      className='w-full px-4 py-4 placeholder-gray-400 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                      required
                    />
                  </div>
                </div>
                
                <div className='sm:col-span-2'>
                  <div className='mt-2.5'>
                    <textarea
                      name='message'
                      placeholder='Your Message'
                      className='w-full px-4 py-4 placeholder-gray-400 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                      rows={4}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <button
                    type='submit'
                    className='text-xl w-full mt-2 font-semibold rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3'
                  >
                    Send
                  </button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
