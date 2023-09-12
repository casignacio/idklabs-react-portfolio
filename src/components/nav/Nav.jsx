import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BsFillPatchQuestionFill} from 'react-icons/bs'
import {AiOutlineExperiment} from 'react-icons/ai'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {GiTeleport} from 'react-icons/gi'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

// FLOATING NAV COMPONENT //
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>

      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPatchQuestionFill /></a>

      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineExperiment /></a>

      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>

      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiTeleport /></a>

      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav