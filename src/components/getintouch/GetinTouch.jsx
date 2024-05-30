"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

const GetinTouch = () => {
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const subref = useRef();
  const checkref=useRef();
  useEffect(() => {
    emailjs.init("TANfsn4gXhVQVZbgI");
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const contact = e.target[2].value;
    const purpose = e.target[3].value;
    const subject = subref.current.value;
    const serviceId = "service_acclrvl";
    const templateId = "template_ph3bqgn";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name,
        email,
        contact,
        purpose,
        subject,
      });
      setToastMessage("Message sent successfully!");
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      checkref.current.checked = false;
    } catch (error) {
      setToastMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    }
  };

  return (
    <>
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded shadow">
          {toastMessage}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-[#F5F5F5] py-5 md:py-10 w-full md:w-9/12 mx-auto p-2 md:p-5"
      >
        <h2 className="text-[#D21414] text-center text-3xl md:text-5xl font-semibold pb-5">
          Get in touch
        </h2>
        <div className="flex flex-col gap-5 w-full md:w-9/12 mx-auto text-black text-sm">
          <input
            className="h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs"
            placeholder="Name"
            required={true}
          ></input>
          <input
            type="email"
            className="h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs"
            placeholder="Email"
            required={true}
          ></input>
          <input
            className="h-8 border-gray-500 border-[1px] outline-none placeholder-black p-5 placeholder:text-xs"
            placeholder="Contact No."
          ></input>
          <textarea
            className="border-gray-500 border-[1px] outline-none placeholder-black placeholder:text-xs p-5"
            rows={5}
            placeholder="Purpose"
            required={true}
          ></textarea>
          <div className="border-gray-500 border-[1px] outline-none placeholder-black text-xs p-5 bg-white">
            <label className="pr-5" htmlFor="subject">Subject:</label>
            <select ref={subref} className="bg-gray-100 px-3 py-2 outline-none" name="subject" id="subject">
              <option value="Ujaama">Ujaama</option>
              <option value="My Mama Told Me">My Mama Told Me</option>
              <option value="Melenated Lifes Matter">Melenated Lifes Matter</option>
            </select>
          </div>
          <div className="w-2/3 md:w-5/12 bg-white border-gray-500 border-[1px] p-2 flex gap-4 justify-center items-center">
            <input ref={checkref} className="w-5 h-5" type="checkbox"></input>
            <span>I&apos;m not a robot</span>
            <Image
              alt="captcha"
              width={50}
              height={50}
              src={"/captcha.png"}
            ></Image>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-b from-[#FF1010] to-[#692323] rounded-sm text-white p-3 w-[200px]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
};

export default GetinTouch;
