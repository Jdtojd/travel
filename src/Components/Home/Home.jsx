import React,{useEffect} from 'react'
import './home.css'
// import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
      Aos.init({duration: 2000})
  },[])


 

  return (
    <section className="home">
      <div className="overlay"></div>
      {/* <video src={video} autoPlay muted loop type="video/mp4"></video> */}
      <video src="https://cdn.pixabay.com/vimeo/384523301/mountains-31175.mp4?width=1280&hash=1b6617bca4d93c9aa8ce06b758d399356bcab50e" autoPlay muted loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holidays
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....' />
              <GrLocation className='icon '/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
              
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">₹5000</h3>
            </div>
            <div className="input flex">
              <input type="range" min ="1000" max="5000"/>
            </div>
          </div>


          <div className="searchOptions flex">
            {/* <HiFilter className="icon"/> */}
            {/* <span>Send Query</span> */}
          </div>
          


          
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <SiTripadvisor className="icon"/>
          </div>
          <div className="leftIcons">
          <BsListTask className="icon"/>
          <TbApps className="icon"/>
          </div>
        </div>
      </div>

    </section>
    )
}

export default Home