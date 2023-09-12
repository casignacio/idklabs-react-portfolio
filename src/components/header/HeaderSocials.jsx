import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaGithubAlt} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank'><AiOutlineLinkedin /></a>
        <a href='https://github.com' target='_blank'><FaGithubAlt /></a>
        <a href='https://instagram.com' target='_blank'><GrInstagram /></a>
        <a href='https://twitter.com' target='_blank'><FiTwitter /></a>
    </div>
  )
}

export default HeaderSocials