"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactSection = (theme) => {
  const [newTheme, setNewTheme] = useState(theme.theme.theme);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  useEffect(() => {
    setNewTheme(theme.theme.theme);
  }, [theme]);
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
            href="https://wa.me/8978347377"
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
          className="w-full  bg-white shadow-xl p-6 rounded-lg relative z-10"
        >
          {" "}
          <div className="flex w-full justify-center items-center">
            <h2 className="font-bold text-xl rounded-full border p-2 pl-6 pr-6 font-sans">
              Let&apos;s work together
            </h2>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
              className="w-full text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
              className="w-full text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
              className="w-full text-black p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`${
              !newTheme ? "text-black" : "text-white"
            } bg-red-500 hover:bg-transparent font-medium text-white hover:text-black text-base lg:text-lg font-bold border-2 rounded-full pl-6 pr-6 pt-2 pb-2`}
          >
            {sending ? "Sending..." : "Send message"}
          </button>
          {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
        </form>{" "}
        <ToastContainer />
      </div>
    </motion.div>
  );
};

export default ContactSection;
