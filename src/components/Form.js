import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetFormData, closeForm } from "../store/formSlice";
import { motion } from "framer-motion";

export default function Form() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const isOpen = useSelector((state) => state.form.isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, contact, email, description } = formData;

    if (name && contact && email && description) {
      try {
        const res = await fetch(
          "https://academy2-ae8a0-default-rtdb.firebaseio.com/contacts.json",
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
          dispatch(resetFormData());
          alert("Data Stored");
          dispatch(closeForm());
        } else {
          alert("Failed to store data");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting form, please try again.");
      }
    } else {
      alert("Please fill in all the data");
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-prime2 p-4 rounded w-full text-black max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">
          Enroll Now
          <br />
          and Get Skilled
        </h2>
        <p className="text-md font-bold text-center mb-2 text-white">
          Please fill the below form and we will get back to you!
        </p>
        <form method="POST" onSubmit={submitData} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact"
                className="block text-white text-sm font-medium"
              >
                Contact
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Enter your contact details"
                value={formData.contact}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="coupon"
                className="block text-white text-sm font-medium"
              >
                Coupon Code
              </label>
              <input
                type="text"
                name="coupon"
                id="coupon"
                placeholder="optional"
                value={formData.coupon}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-white text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Write something that you are interested in learning"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-org1 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-opacity-75"
            >
              Submit
            </button>
          </div>
          <button
            type="button"
            onClick={() => dispatch(closeForm())}
            className="mt-2 text-orange-600"
          >
            Close
          </button>
        </form>
      </div>
    </motion.div>
  );
}
