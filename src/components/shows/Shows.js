import React from 'react'
import Background from '../../img/f-1.jpg'
import Continue from '../../img/f-t-1.png'
import Show1 from '../../img/1.jpeg'
import './shows.css'

function Shows() {
    return (
        <div className="container">
            <div className="continue-watching"
                style={{background:`linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${Background})`}}
            >
                <div className="continue-watching-container">
                    <img className="continue-watching-title" src={Continue} alt="continue-watching"/> 
                    <p className="continue-watching-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores qui minus unde ab. 
                        Vero, fugiat accusantium! Pariatur laborum, blanditiis corporis animi suscipit incidunt perferendis, 
                        aut, repellat corrupti praesentium architecto.
                    </p>
                    <button className="continue-watching-btn">WATCH</button>
                </div>
            </div>
            <div className="show-carousel">
                <h1 className="show-carousel-title">Show Carousel</h1>   
                <div className="show-carousel-wrapper">
                    <div className="show-carousel-list">
                        <div className="show-carousel-item">
                            <img className="show-carousel-img" src={Show1} alt="show-carousel"/>
                            <h4>The Ben Show</h4>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    )
}

export default Shows
