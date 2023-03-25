import React, { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import AppWrap from "wrapper/AppWrap/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";
import ContactForm from "./ContactForm";
import SubmitMessage from "./SubmitMessage";
import { section } from "constants/sections";

const Footer: React.FC = () => {
  const timeoutId = useRef<NodeJS.Timeout>();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isFormSubmitted) {
      timeoutId.current = setTimeout(() => setIsFormSubmitted(false), 5000);
    }
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [isFormSubmitted]);

  if (isFormSubmitted) {
    return <SubmitMessage />;
  }
  return <ContactForm setIsFormSubmitted={setIsFormSubmitted} />;
};

export default AppWrap(
  MotionWrap(PageWrap(Footer, "Take a coffee & **chat** with me")),
  section.CONTACT
);
