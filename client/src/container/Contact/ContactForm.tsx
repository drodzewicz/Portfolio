import React, { useState } from "react";
import { client } from "client";
import { FormMessage, IContactFormProps } from "./types";
import { images } from "constants/index";

const ContactForm: React.FC<IContactFormProps> = ({ setIsFormSubmitted }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormMessage>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      ...formData,
      _type: "contact",
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  const handleChangeInput = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <div className="app__contact-container">
      <div className="app__contact-container__text">
        <h2>You can contact me by sending me an email on</h2>
        <a href="mailto: DRodzewicz@gmail.com" className="contact-email">
          <img src={images.email} alt="" />
          DRodzewicz@gmail.com
        </a>
        <h3 className="text-grey">Or</h3>
        <h2>you can send you message using this forum</h2>
      </div>
      <input
        className="app__contact-input"
        type="email"
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChangeInput}
      />
      <textarea
        className="app__contact-input app__contact-body"
        placeholder="Your Message"
        value={formData.message}
        name="message"
        onChange={handleChangeInput}
      />
      <button type="button" className="app__contact-submit" onClick={handleSubmit}>
        {!isLoading ? "Send Message" : "Sending..."}
      </button>
    </div>
  );
};

export default ContactForm;
