"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { IoIosSend } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
const ContactSection = (theme) => {
  const [newTheme, setNewTheme] = useState(theme.theme);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  useEffect(() => {
    setNewTheme(theme.theme);
  }, [theme]);
  console.log("tehh", newTheme);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSending(false);
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!", { position: "top-right" });
        setTimeout(() => {
          setStatus(""), 5000;
        });
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
        });
        setStatus("Failed to send message. Please try again.");
        setTimeout(() => {
          setStatus(""), 5000;
        });
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.", {
        position: "top-right",
      });
      setStatus(`Error sending message. Please try again.${error}`);
      setTimeout(() => {
        setStatus(""), 5000;
      });
    }
  };

  return (
    <motion.div
      id="contact"
      className=" w-full flex flex-col  items-center gap-7 p-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {" "}
      <h1 className="text-2xl font-bold text-red-500 text-center">
        Contact Me
      </h1>
      <div className="w-full lg:w-[40%] md:w-[75%] flex flex-col gap-7 md:flex-row items-center justify-center">
        <div className="flex md:flex-col  gap-5  text-3xl text-indigo-600">
          <a
            href="https://wa.me/918978347377"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 text-red-500"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:lakkakulababblu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/laze.rcode/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 text-red-500"
          >
            <FaInstagram />
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full border-b-4   border-red-500  bg-transparent p-6 rounded-lg relative z-10"
        >
          {" "}
          <div className="flex w-full justify-center items-center pb-4">
            <h2
              className={`${
                !newTheme ? "text-black" : "text-white"
              } block font-roboto font-bold text-black  font-roboto text-xl  p-2 pl-6 pr-6 font-sans2`}
            >
              Let&apos;s work together
            </h2>
          </div>
          <div className="mb-4">
            <label
              className={`${
                !newTheme ? "text-black" : "text-white"
              } block font-roboto text-gray-700 text-sm font-medium mb-2`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className={`${
                !newTheme ? "text-black" : "text-white"
              } w-full bg-transparent text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className={`${
                !newTheme ? "text-black" : "text-white"
              } block font-roboto text-gray-700 text-sm font-medium mb-2`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`${
                !newTheme ? "text-black" : "text-white"
              } w-full bg-transparent text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className={`${
                !newTheme ? "text-black" : "text-white"
              } block font-roboto text-gray-700 text-sm font-medium mb-2`}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`${
                !newTheme ? "text-black" : "text-white"
              } w-full bg-transparent text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`${
              !newTheme ? "text-white hover:text-black" : "text-white "
            } bg-red-500 hover:bg-transparent font-medium  text-base lg:text-lg font-bold border-2 rounded-full pl-6 pr-6 pt-2 pb-2`}
          >
            {sending ? (
              <span className="flex  justify-center items-center gap-1">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-red-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>{" "}
                Sending...
              </span>
            ) : (
              <span className="flex  justify-center items-center gap-1">
                {" "}
                Send message <IoIosSend />
              </span>
            )}
          </button>
          {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
        </form>{" "}
        <ToastContainer className="p-4 rounded-full" />
      </div>
    </motion.div>
  );
};

export default ContactSection;
