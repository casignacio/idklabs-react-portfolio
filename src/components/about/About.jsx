import React from 'react'
import './about.css'
import ME from '../../assets/me-buu.png'
import {CgWorkAlt} from 'react-icons/cg'
import {FaPeopleCarry} from 'react-icons/fa'
import {AiFillExperiment} from 'react-icons/ai'


const About = () => {
  return (
    <section id="about">
      <h5>Let Me Tell You</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='about me' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <CgWorkAlt className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>

            <article className='about__card'>
              <FaPeopleCarry className='about__icon'/>
              <h5>Clients</h5>
              <small>Be The First!</small>
            </article>

            <article className='about__card'>
              <AiFillExperiment className='about__icon'/>
              <h5>Projects</h5>
              <small># Completed Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nulla harum sint voluptas corrupti ab nemo quaerat aliquam autem incidunt in recusandae doloribus obcaecati rem impedit, quas ratione ipsum unde!</p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>

      </div>

    </section>
  )
}

export default About