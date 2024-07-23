import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, contact, email, description } = formData;

    if (name && contact && email && description) {
      try {
        const res = await fetch(
          "https://practice-c217b-default-rtdb.firebaseio.com/contacts.json", 
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              contact,
              description,
            }),
          }
        );

        if (res.ok) {
          setFormData({
            name: "",
            email: "",
            contact: "",
            description: ""
          });
          alert("Data Stored");
        } else {
          alert("Failed to store data");
        }
      } catch (error) {
        console.error('Error:', error);
        alert("Error submitting form, please try again.");
      }
    } else {
      alert("Please fill in all the data");
    }
  };

  return (
    <div className="mt-1 md:mt-0 py-0 md:py-7 mx-1  flex flex-col items-center justify-center">
    <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl flex flex-col md:flex-row gap-4 md:gap-6">
                    {/* Form Section */}
      <div className="bg-prime1 p-8 rounded-lg w-full flex-1 shadow-lg border border-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
          Enroll Now<br />and Get Skilled
        </h2>
        <p className="text-md font-bold text-center mb-2 text-white">
          Please fill the below form and we will get back to you!
        </p>
        <form method='POST' onSubmit={submitData} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='Enter email address'
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact" className="block text-white text-sm font-medium">Contact</label>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder='Enter your contact details'
                value={formData.contact}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="coupon" className="block text-white text-sm font-medium">Coupon Code</label>
              <input
                type="text"
                name="coupon"
                id="coupon"
                placeholder='Optional'
                value={formData.coupon}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-white text-sm font-medium">Message</label>
            <textarea
              name="description"
              id="description"
              placeholder='Write something that you are interested in learning'
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-org1 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-opacity-75"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

                                       {/* Map Section */}
      <div className=" hidden md:block flex-1 aspect-w-16 aspect-h-9 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <iframe
          className="w-full h-full rounded"
          title="FutureDev Academy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.857503966925!2d70.07476411118057!3d23.065685179056533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b9e0724a93ff%3A0xe6f0a960391b2a54!2sGEB%20Office!5e0!3m2!1sen!2sin!4v1721669511833!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>




  );
} 