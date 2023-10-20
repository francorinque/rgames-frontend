import { FaLinkedinIn, FaGithub } from "react-icons/fa6"

import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h6>Created by: Rinque Franco.</h6>

      <div className={style.social}>
        <a href="https://www.linkedin.com/in/franco-agustin-rinque/">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/francorinque">
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}
export default Footer
