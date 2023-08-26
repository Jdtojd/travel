import React from 'react'
import './flight.css'
import img from '../../Assets/plane.png'
import { ReactDOM } from 'react'


const flight = () => {
  return (
    <div className="flight flex container">
        <div className="mainText">
            <h1>Create Memories With us</h1>
        </div>
        <div className="homeImages flex">
            <div className="videoDiv">
                <video src="https://cdn.pixabay.com/vimeo/387675206/night-sky-31569.mp4?width=640&hash=35e8e870c3e6211607658a2caa36c0b830e8c463" autoPlay muted loop className='video'></video>
            </div>
            <img src={img} className='plane' />
        </div>
    </div>
  )
}

export default flight