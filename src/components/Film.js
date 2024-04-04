import React from 'react'
import './Film.css'


const Film = (props) => {
  return (
    <div className='one-movie'>
      <img src={props.movieImage} alt="" />
      <h2>{props.movieTitle}</h2>
      <p>Věk: {props.movieAge}</p>
      <p>Tagy: {props.movieTags}</p>
      <p>Popis: {props.movieDescription}</p>
  </div>
  )
}

export default Film