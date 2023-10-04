import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

// TEMPLATE ARRAY FOR DYNAMICALLY GENERATED LINKS //
// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: '(insert title here)',
//     github: 'https://github.com'
//     demo: '(url here)'
//   }
//   {
//     id: 2,
//     image: IMG2,
//     title: '(insert title here)',
//     github: 'https://github.com'
//     demo: '(url here)'
//   }
//   {
//     id: 3,
//     image: IMG3,
//     title: '(insert title here)',
//     github: 'https://github.com'
//     demo: '(url here)'
//   }
// ]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Projects</h5>
      <h1>Portfolio</h1>

      <div className="container portfolio__container">

        {/* DYNAMICALLY GENERATED LINKS */}

        {/* {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        } */}

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="JATE" />
          </div>
          <h3>Le Bon Mange</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/LarryByrd89/gusteaus-restaurant" className='btn' target='blank'>Github</a>
            <a href="https://evening-temple-83472-cd362ca31882.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="weather app" />
          </div>
          <h3>Weather Dashboard</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/casignacio/weather-app" className='btn' target='blank'>Github</a>
            <a href="https://casignacio.github.io/weather-app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="pw generator" />
          </div>
          <h3>Password Generator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/casignacio/password-generator" className='btn' target='blank'>Github</a>
            <a href="https://casignacio.github.io/password-generator/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="note taker" />
          </div>
          <h3>Note Taker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/casignacio/note-taker" className='btn' target='blank'>Github</a>
            <a href="https://mysterious-thicket-90983-0ba708165240.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="calendar" />
          </div>
          <h3>The Calendar</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/casignacio/calendar-app-01" className='btn' target='blank'>Github</a>
            <a href="https://casignacio.github.io/calendar-app-01/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="JATE" />
          </div>
          <h3>Coding Quiz</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/casignacio/code-quiz" className='btn' target='blank'>Github</a>
            <a href="https://casignacio.github.io/code-quiz/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio