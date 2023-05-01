import EmailImage from "assets/images/email.png";
import React, { useState } from "react";

import { FormMessage, IContactFormProps } from "./types";

const ContactForm: React.FC<IContactFormProps> = ({ setIsFormSubmitted }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormMessage>({
    email: "",
    message: "",
  });

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => setIsFormSubmitted(true))
      .catch((error) => alert(error))
      .finally(() => setIsLoading(false));
  };

  const handleChangeInput = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const isValid = () => {
    return formData.email || formData.email;
  };

  return (
    <div className="app__contact-container">
      <div className="app__contact-container__text">
        <h2>You can contact me by sending me an email on</h2>
        <a href="mailto: DRodzewicz@gmail.com" className="contact-email">
          <img src={EmailImage} alt="" />
          DRodzewicz@gmail.com
        </a>
        <h3 className="text-grey">Or</h3>
        <h2>you can send your message using this form</h2>
      </div>
      <form
        className="app__contact-form"
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
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
        <button
          type="submit"
          className="app__contact-submit"
          disabled={!isValid()}
        >
          {!isLoading ? "Send Message" : "Sending..."}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
