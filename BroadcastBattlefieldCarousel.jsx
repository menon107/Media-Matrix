import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes both Bootstrap JS and Popper.js

import React from 'react';
import './Carousel.css';

const BroadcastBattlefieldCarousel = () => {
  
  return (
    <div 
      className="color" 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        padding: '2rem 0', // Added padding on top and bottom
        maxWidth: '100%', // Ensure the container can expand to fit content
      }}
    >
      <img 
        src="src/assets/EventsHeading.png" 
        alt="Text" 
        style={{ 
          height: '30rem', 
          width: '15rem', 
          transform: 'rotate(90deg)', 
          marginRight: 'auto', 
          marginLeft: 'auto', 
          padding: '0' 
        }} 
      />
      <div 
        id="carouselExampleFade" 
        className="carousel slide carousel-fade" 
        data-bs-ride="carousel"
      >
        <div 
          className="carousel-inner"
          style={{ 
            padding: '2rem 0', // Additional padding for inner carousel items
          }}
        >
          <div className="carousel-item active d-flex" style={{ background: 'linear-gradient(120deg, #300000 0%, #700000 50%, #300000 100%)', width: '70em', height: '25rem' }}>
            <img src='src/assets/Event.png' className="d-inline w-40" alt="Event" style={{ width: '30%', padding: '2rem' }} />
            <div className="d-flex flex-column align-items-start" style={{ paddingLeft: '2rem', textAlign: 'left' }}>
              <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold' }}>BROADCAST BATTLEFIELD</h1>
              <h2 style={{ color: '#fff', fontSize: '1.2rem' }}>Teams of three will participate in a dynamic three-round competition, showcasing innovative business ideas and entrepreneurial spirit. Participants will submit detailed written pitches, followed by an elevator pitch, and finally a live pitch to judges.</h2>
              <h2 style={{ color: '#fff', fontSize: '1rem' }}>Date - 9th November</h2>
              <h2 style={{ color: '#fff', fontSize: '1rem' }}>Registration Fee: ₹250 per person</h2>
              <h2 style={{ color: '#fff', fontSize: '1rem' }}>Prize Pool: ₹6000</h2>
              <h2 style={{ color: '#fff', fontSize: '1rem' }}>For details Contact</h2>
              <h2 style={{ color: '#fff', fontSize: '1rem' }}>Thakur Mahima Nuruti - 8817233661</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src='src/assets/Event.png' className="d-inline w-100 h-30" alt="Event" style={{ width: '30%', padding: '2rem' }} />
          </div>
          <div className="carousel-item">
            <img src="src/assets/Event.png" className="d-inline w-100" alt="Event" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev" aria-hidden="true">
            <img src="src/assets/Arrow2.png" style={{ transform: 'rotate(90deg)', width: '4rem', height: '4rem', position: 'absolute', top: '50%', left: '-7rem' }} alt="Arrow"/>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next" aria-hidden="true">
            <img src="src/assets/Arrow.png" style={{ transform: 'rotate(90deg)', width: '4rem', height: '4rem', position: 'absolute', top: '50%', right: '-7rem' }} alt="Arrow"/>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BroadcastBattlefieldCarousel;
