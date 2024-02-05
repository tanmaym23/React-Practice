import React from 'react'
import "./News.css"
export default function Newsitem({title,description,img,url}) {
  return (
    <div className='maindiv'>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={img} alt={title}/>
            <a href={url} target='_blank' rel="noreferrer">Read More</a>
    </div>
  )
}