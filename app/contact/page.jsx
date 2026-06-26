"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "01788895287",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hossainpromil6286@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Dhaka, Bangladesh",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/c62ede122b8d4b6e20315204761f2ed5",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setModalMessage(
        "Your message has been sent successfully. I will get back to you soon."
      );
      setSubmitStatus("success");
    } catch (error) {
      setModalMessage(
        "Sorry, the message could not be sent right now. Please try again or email me directly."
      );
      setSubmitStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-6 sm:p-10 bg-[#27272c] rounded-xl"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Have a project, question, or collaboration idea? Send the
                details here and I will get back to you as soon as possible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="First name"
                  placeholder="Firstname"
                  required
                />
                <Input
                  type="text"
                  name="Last name"
                  placeholder="Lastname"
                  required
                />
                <Input
                  type="email"
                  name="Email"
                  placeholder="Email address"
                  required
                />
                <Input
                  type="tel"
                  name="Phone"
                  placeholder="Phone number"
                />
              </div>
              <Input
                type="text"
                name="_subject"
                placeholder="Subject"
                required
              />
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="Message"
                placeholder="Type your message here."
                required
              />
              {/* btn */}
              <Button
                type="submit"
                size="md"
                disabled={submitStatus === "loading"}
                className="max-w-40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitStatus === "loading" ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 w-full min-w-0 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="w-full max-w-full flex flex-col gap-8 xl:gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 xl:gap-6 min-w-0">
                    <div className="shrink-0 w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-base sm:text-xl break-words">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {(submitStatus === "success" || submitStatus === "error") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 px-4">
          <div className="w-full max-w-[420px] rounded-xl bg-[#27272c] p-8 text-center shadow-xl">
            <h3 className="mb-4 text-2xl font-bold text-accent">
              {submitStatus === "success" ? "Message sent" : "Send failed"}
            </h3>
            <p className="mb-6 text-white/70">{modalMessage}</p>
            <Button
              type="button"
              size="md"
              onClick={() => setSubmitStatus("idle")}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
