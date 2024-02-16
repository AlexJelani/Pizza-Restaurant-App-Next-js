import React from 'react';

function Contact() {
    return (
        <section className='w-full md:h-screen xl:h-screen 2xl:h-screen pt-14 pb-4 text-white' id='contact'>
            <div className='text-3xl md:text-6xl xl:text-7xl 2xl:text-7xl md:mt-10 2xl:mt-20 text-white text-center bg-red-500'>Contact</div>
            <hr className="w-1/2 mx-auto h-0.5 mt-5 bg-white"></hr>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-1 pt-6 bg-red-500'>
                <div className='w-full text-center'>
                    <div className='text-xl md:text-2xl xl:text-3xl 2xl:text-3xl mt-6'>
                        <h1 className='mb-3'>FIND OUR RESTAURANT</h1>
                        <ul className="list-disc">
                            <li>愛知県蒲郡市西浦町西馬相51</li>
                            <li>Gamagori, Aichi, 443-0105</li>
                        </ul>
                        <p className='hover:scale-110 duration-200'>Order Now! 090-1862-1728</p>
                        <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
                    </div>
                    <div className='text-xl md:text-2xl xl:text-3xl 2xl:text-3xl mb-10 mt-3'>
                        <h1 className='mb-3'>WE ARE OPEN</h1>
                        <p>Saturday - Sunday</p>
                        <p>12:00 - 19:00</p>
                        <p>Order takeaway or come in and try it on the spot!</p>
                    </div>
                </div>
                <div className="flex justify-center md:col-span-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13106.891644578469!2d137.16738579075835!3d34.78775026802187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004c1d438449c3d%3A0x521b2564a053c157!2staki%20pizza!5e0!3m2!1sen!2sjp!4v1702964560699!5m2!1sen!2sjp"
                        width="100%"
                        height="350"
                        style={{ maxWidth: '400px', border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
