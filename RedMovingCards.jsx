import React, { useRef, useEffect } from 'react';
import './RedMovingCards.css';

const cards = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen" },
  { id: 2, title: "Stairway to Heaven", artist: "Led Zeppelin" },
  { id: 3, title: "Imagine", artist: "John Lennon" },
  { id: 4, title: "Smells Like Teen Spirit", artist: "Nirvana" },
  { id: 5, title: "Billie Jean", artist: "Michael Jackson" },
  { id: 6, title: "Like a Rolling Stone", artist: "Bob Dylan" },
  { id: 7, title: "Purple Rain", artist: "Prince" },
  { id: 8, title: "What's Going On", artist: "Marvin Gaye" },
];

export default function RedMovingCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pauseAnimation = () => {
      container.style.animationPlayState = 'paused';
    };

    const resumeAnimation = () => {
      container.style.animationPlayState = 'running';
    };

    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);

    return () => {
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  return (
    <div className="red-moving-cards-container">
      <div className="red-moving-cards" ref={containerRef}>
        {[...cards, ...cards].map((card, index) => (
          <div key={`${card.id}-${index}`} className="card">
            <h3>{card.title}</h3>
            <p>{card.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

