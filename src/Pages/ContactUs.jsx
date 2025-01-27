import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';  // Importing Lucide Icons
// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';  // Social media icons
import contact from'../icons/top-view-blue-monday-concept-composition-with-telephone_23-2149139106.png'
import image from '../icons/flat-design-illustration-customer-support_23-2148887720.png'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Left Column */}
          <div className="md:w-1/2 p-6  text-black relative">
            <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">
              Contact Us
            </h2>
            <p className="mb-4 animate__animated animate__fadeInDown animate__delay-1s">
              We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="flex items-center mb-4 animate__animated animate__fadeInDown animate__delay-2s">
              <Phone className="mr-2" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center mb-4 animate__animated animate__fadeInDown animate__delay-3s">
              <Mail className="mr-2" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center mb-4 animate__animated animate__fadeInDown animate__delay-4s">
              <MapPin className="mr-2" />
              <span>1234 Street Name, City, State, 12345</span>
            </div>
            <div className="flex space-x-4 mt-6 animate__animated animate__fadeInDown animate__delay-5s">
              <a className="text-white hover:text-gray-300" href="#">
                {/* <Facebook /> */}
              </a>
              <a className="text-white hover:text-gray-300" href="#">
                {/* <Twitter /> */}
              </a>
              <a className="text-white hover:text-gray-300" href="#">
                {/* <Linkedin /> */}
              </a>
              <a className="text-white hover:text-gray-300" href="#">
                {/* <Instagram /> */}
              </a>
            </div>
            <img
              alt="Decorative image of a modern office environment"
              className="mt-6 rounded-lg object-fill opacity-100"
              src={image}
            />

          </div>

          {/* Right Column - Form */}
          <div className="md:w-1/2 p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-right">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
