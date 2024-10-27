import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


export const TitleCards = ({ title, category }) => {

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmNjYjM2MzRlMTEzNDdjYWQ3ZTRhZDkwMDY5ZGJlZCIsIm5iZiI6MTczMDA0OTAzNC44MzcwNjgsInN1YiI6IjY3MWU3MmU4ZTgzM2Q5MmVmMDYwODEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F1MytmEJFPfsJyM_s-SgurHIu9lP4kpwOCBJm1G3Iqo'
    }
  };


  const handleWheel = (event) => {
    event.preventDefault;
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])


  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
