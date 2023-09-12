import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import BUU from '../../assets/kid-buu.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>idk.labs</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={BUU} alt='kid buu' />
        </div>

        {/* <a href='contact' className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header