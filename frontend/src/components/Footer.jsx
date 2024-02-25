import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">भोजनालय</div>
          <div className="right">
            <p>02-Main Road Raver Dist:Jalgaon</p>
            <p>Open: 10:00 AM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Vishal Mahajan</p>
            
          </div>
          <div className="right">
          <div className="social-icons">
              <a href="https://github.com/v1shalx" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="www.linkedin.com/in/vishalxmahajan" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://wa.me/918010414088" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://instagram.com/your-instagram-url" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
