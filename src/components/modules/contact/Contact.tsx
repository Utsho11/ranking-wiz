"use client";
import { Image } from "@nextui-org/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import envConfig from "@/src/config/envConfig";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { user_name, user_email, subject, message } = formData;

      await emailjs.send(
        envConfig.serviceId as string, // Replace with your EmailJS Service ID
        envConfig.templateId as string, // Replace with your EmailJS Template ID
        { user_name, user_email, subject, message },
        envConfig.publicId as string // Replace with your EmailJS Public Key
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
        confirmButtonColor: "#BA68C8",
      });

      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send your message. Please try again.",
        confirmButtonColor: "#BA68C8",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 p-6">
        <div className="flex-1">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              isRequired
              label="Name"
              name="user_name"
              placeholder="Enter your name"
              type="text"
              value={formData.user_name}
              onChange={handleChange}
            />
            <Input
              isRequired
              label="Email"
              name="user_email"
              placeholder="Enter your email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
            />
            <Input
              isRequired
              label="Subject"
              name="subject"
              placeholder="Enter the subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
            <Textarea
              isRequired
              label="Message"
              name="message"
              placeholder="Enter your message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              className="w-full bg-[#BA68C8] hover:bg-[#9E58A6]"
              color="primary"
              isDisabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <p className="italic my-4">Let’s grow your business together!</p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            isBlurred
            alt="Web Development Services"
            className="rounded-lg"
            height={400}
            src="/contact.png"
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
