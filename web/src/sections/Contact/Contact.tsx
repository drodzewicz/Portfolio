import { section } from "constants/sections";
import React, { useEffect, useRef, useState } from "react";
import AppWrap from "wrapper/AppWrap/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";

import "./Contact.scss";
import ContactForm from "./ContactForm";
import SubmitMessage from "./SubmitMessage";

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
  MotionWrap(PageWrap(Footer, "Take a coffee & <strong>chat</strong> with me")),
  section.CONTACT
);
