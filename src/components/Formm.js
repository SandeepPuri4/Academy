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
    <div className="h-[650px] w-[415px] flex items-center justify-center mt-12 bg-gray-100 md:mt-32 md:w-full">
      <div className="bg-orange-400 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Enroll Now<br/>and Get Skilled</h2>
        <form method='POST' onSubmit={submitData} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder='enter your name'
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium ">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='enter email address'
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-white text-sm font-medium ">Contact</label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder='enter your contact details'
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-white text-sm font-medium ">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder='write something that you are interested in learning'
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-opacity-75"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}