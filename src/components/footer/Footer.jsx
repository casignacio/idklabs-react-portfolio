import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>idk.labs</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://indeed.com"></a>
        <a href="https://github.com"></a>
        <a href="https://instagram.com"></a>
        <a href="https://twitter.com"></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; idk.labs | All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer