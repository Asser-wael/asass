import './Hero.css';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "./ano.json";
import avatarImg from "./12.png";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left */}
      <motion.div
        className="left-div"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="avatar">
          <img src={avatarImg} alt="Asser Wael" />
        </div>

        <div className="about">
          <h1>Software designer, founder, and amateur astronaut</h1>
          <p>
            I'm Asser Wael, a Web developer based in Egypt.
            I build modern, scalable, and beautiful digital experiences.
          </p>
        </div>

        <div className="icons">
          <a
            className="icon icon-instagram"
            href="https://instagram.com/asser_wae1/"
            target="_blank"
            rel="noopener noreferrer"
          />

          <a className="icon icon-twitter" href="#" />
          <a className="icon icon-github"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Asser-wael" />
          <a className="icon icon-linkedin" href="#" />
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        className="right-div"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Lottie animationData={animationData} loop />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
