import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import './AboutMediaMatrix.css'; //importing About IIITNR.css because of same classnames

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="about-us" id="About Us">
      <div className="about-us-content">
        <h1 className="about-us-title" data-aos="fade-up" data-aos-duration="6000">
          ABOUT US
        </h1>
        <div className="about-us-flex">
          <div className="about-us-text" data-aos="fade-up" data-aos-duration="3000">
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
          <div className="about-us-logo" data-aos="fade-up" data-aos-duration="3000">
            <img
              src={require('../assets/MM_logo_1.png')}
              alt="Media Matrix Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMediaMatrix;
