import React from 'react'
import './experience.css'
import { BsFiletypeHtml } from 'react-icons/bs'
import { BsFiletypeCss } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { BiLogoJquery } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>This Is My</h5>
      <h1>Experience</h1>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFiletypeHtml className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFiletypeCss className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBootstrapFill className='experience__details-icon'/>
              <div>
                <h4>Boostrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BiLogoJquery className='experience__details-icon'/>
              <div>
                <h4>JQuery</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
              <div>
                <h4>Express JS</h4>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section >
  );
}

export default Experience