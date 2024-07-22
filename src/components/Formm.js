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
    <div className="h-[700px] w-[400px] mx-auto flex items-center justify-center md:w-full lg:w-[800px] xl:w-[1000px]">
  <div className="bg-prime2 p-8 w-[415px] rounded md:w-full lg:w-full xl:w-full max-w-md lg:max-w-none">
    <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
      Enroll Now<br/>and Get Skilled
    </h2>
    <p className="text-md font-bold text-center mb-2 text-white">Please fill the below form and we will get back to you!</p>
    <form method='POST' onSubmit={submitData} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-white text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder='enter your name'
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='enter email address'
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            placeholder='enter your contact details'
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="coupon" className="block text-white text-sm font-medium">Coupon Code</label>
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder='optional'
            value={formData.coupon}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-white text-sm font-medium">Message</label>
        <textarea
          name="description"
          id="description"
          placeholder='write something that you are interested in learning'
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="">
        <button
          type="submit"
          className="w-full justify-center bg-org1 text-white py-2 px-4 rounded-md hover:bg-orange-500 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-opacity-75"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

  );
} 