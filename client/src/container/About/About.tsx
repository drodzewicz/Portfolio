import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import AppWrap from "wrapper/AppWrap";

interface AboutI {
  title: string;
  description: string;
  imgUrl: SanityImageSource;
}

const About = () => {
  const [abouts, setAbouts] = useState<AboutI[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts" ]';
    client.fetch(query).then((data) => {
      setAbouts(data);
      data.forEach((el: AboutI) => {
        console.log(urlFor(el.imgUrl));
      });
    });


    return () => {};
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span>
        <br />
        means <span>Good Buisness</span>
      </h2>
      <div className="app__profile">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`${about.title}`}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
