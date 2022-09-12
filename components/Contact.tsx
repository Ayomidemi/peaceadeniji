import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineMail, AiFillWarning } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp, HiOutlineCheck } from "react-icons/hi";
import contact from "../public/images/contact.jpg";
import emailjs from "@emailjs/browser";
import ToastNotification from "./ToastNotification";
import Footer from "./Footer";

const Contact = () => {
  const [submit, setSubmit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState({
    type: "",
    msg: "",
  });

  const handleCloseNotification = () => {
    setMessage({
      type: "",
      msg: "",
    });
  };

  const [Contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const form: any = useRef();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContact((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };
  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContact((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    setLoading(true);

    emailjs
      .sendForm(
        "service_6yn0zoq",
        "template_y9wijrs",
        form.current,
        "LwM5O6DR_vHnop9i3"
      )
      .then(
        (result) => {
          setLoading(false);

          setMessage({
            type: "success",
            msg: "message",
          });
          setTimeout(() => {
            setMessage({
              type: "",
              msg: "",
            });
            setSubmit(false);
          }, 5000);

          setContact({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          setSubmit(false);
          setMessage({
            type: "error",
            msg: error.message,
          });

          setTimeout(() => {
            setMessage({
              type: "",
              msg: "",
            });
          }, 8000);
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      {message.msg !== "" && (
        <ToastNotification
          type={message.type}
          text={
            message.type === "error"
              ? message.msg
              : "Thank you for reaching out! I'll reply as soon as I can."
          }
          onclick={handleCloseNotification}
          icon={message.type === "success" ? HiOutlineCheck : AiFillWarning}
        />
      )}
      {submit}

      <div className="max-w-[1240px] m-auto px-6 sm:px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-blue-600">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 ">Peace Adeniji</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for contract or full-time positions. Contact me
                  and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4 w-[90%] sm:w-full">
                  <a
                    href="https://www.linkedin.com/in/peaceadeniji"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Ayomidemi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <a
                    href="mailto: adenijiayomide13@gmail.com.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>

                  <a
                    href="https://twitter.com/pease_js"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-6 text-xl cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsTwitter />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 outline-none"
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                      value={Contact.name}
                    required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 outline-none"
                      type="text"
                      name="phone"
                      onChange={handleInputChange}
                      value={Contact.phone}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 outline-none"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={Contact.email}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 outline-none"
                    type="text"
                    name="subject"
                    onChange={handleInputChange}
                    value={Contact.subject}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 outline-none h-[150px]"
                    name="message"
                    onChange={handleTextAreaChange}
                    value={Contact.message}
                    required
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  {!loading ? "Send Message" : "Please Wait..."}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-blue-600"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
