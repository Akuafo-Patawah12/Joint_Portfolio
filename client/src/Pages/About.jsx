import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Hello! We are passionate web developers with the love for creating beautiful and functional websites. With a background in IT and a keen eye for design, I strive to build web applications and mobile applications that are not only visually appealing but also user-friendly and efficient.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    We have experience working with various web technologies including HTML, CSS, JavaScript, React, React native and Tailwind CSS. I enjoy learning new things and staying up-to-date with the latest trends in web development and tech as a whole.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    We give the best our of the rest, we would love to hear from you. We are always open to new opportunities and collaborations, so feel free to reach out!
                </p>
                <div className="text-center mt-6 h-10 w-full] rounded-2xl border-2 border-blue-700">
                    <a href="/contact" className="text-blue-500 block  w-full h-[40px] hover:underline">Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default About;