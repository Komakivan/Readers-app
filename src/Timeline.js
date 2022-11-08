import React from 'react'

const Timeline = (props) => {
  return (
    <div>
        <div class="container">
        
        <div class="timeline">
            <ul>
            <li>
                <div class="timeline-content">
                <h3 class="date">{props.date}</h3>
                <h1>{props.title}</h1>
                <p>Author: <cite>{props.author}   |   comments: {props.comments}</cite></p>
                <p><a className='link' href={props.url}>Learn more</a></p>
                </div>
            </li>
            
            </ul>
        </div>
        </div>
            </div>
        )
        }

export default Timeline