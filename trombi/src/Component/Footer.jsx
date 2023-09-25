import React from "react";
import { BsGithub } from "react-icons/bs";
import { StudientData } from "./StudientData";

function Footer() {
  return (
    <div className="footer">
      <div className="link-github">
        <a href="https://github.com/Ludoph" target="_blank">
          <BsGithub />
          Ludovic Phounphonh
        </a>
        <a href="https://github.com/NassJs" target="_blank">
          <BsGithub />
          Nassim Deflandre
        </a>
      </div>
    </div>
  );
}

export default Footer;
