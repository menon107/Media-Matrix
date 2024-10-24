'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutMediaMatrix() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section className="about-us" id="AboutUs">
      <div className="about-us-content">
        <h1 className="about-us-title" data-aos="fade-up" data-aos-duration="1000">
          ABOUT US
        </h1>
        <div className="about-us-flex">
          <div className="about-us-text" data-aos="fade-up" data-aos-duration="1000">
            <p>
              Media Matrix is a flagship event organized by the Media & IT Cell of IIIT-NR,
              bringing together creative minds and problem solvers across multiple
              disciplines. With a diverse range of tracks such as Ad Making, Cryptic Hunt,
              Turing Test, Debate, eSports, Quiz, Designathon, and Pitching, Media Matrix
              challenges participants to showcase their creativity, communication skills,
              analytical thinking, and technical prowess.
              Whether it's crafting compelling narratives, solving complex puzzles, or designing innovative solutions,
              Media Matrix offers a platform for all.
            </p>
            <p className="about-us-highlight">
              Dive into Media Matrix and experience the intersection of creativity, media,
              and competition!
            </p>
          </div>
          <div className="about-us-logo" data-aos="fade-up" data-aos-duration="1000">
            <img
              src="/assets/MM_logo_1.png"
              alt="Media Matrix Logo"
              style={{ width: '300px', height: '300px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
