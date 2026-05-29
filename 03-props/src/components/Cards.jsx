import React from 'react'

const Cards = (props) => {
    console.log(props)
  return (
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
  )
}

export default Cards
