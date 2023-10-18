import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h6>Created by: Rinque Franco.</h6>

      <div className={style.social}>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
