import React,{useEffect} from 'react' 
import './footer.css'
// import video from '../../Assets/video.mp4'
import { FiSend } from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  return (
    <section className="footer">
      <div className="videoDiv">
        {/* <video src={video} loop autoPlay muted type="video/mp4"></video> */}
        <video src="https://cdn.pixabay.com/vimeo/842348732/starry-sky-169951.mp4?width=1280&hash=e5539835d59fc7ffab8d6b18b75eba9e3a1da3ec" loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>


          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter your email' />
            <button data-aos="fade-up" className="btn flex" type='submit'> SEND
              <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>
                ATT.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut debitis molestiae optio exercitationem quos accusamus at numquam odio in ex animi, minus ipsam dolor delectus asperiores expedita aperiam omnis enim.
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
              





            </div>



          </div>
          <div className="footerLinks grid">
           {/*Group one*/}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkgroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>Payment
              </li>

            </div>


            {/*Group Two*/}



            <div data-aos="fade-up" data-aos-duration="4000" className="linkgroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>BOOKINGS
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>RENTCARS
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>HOSTELWORLD
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>TRIVAGO
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>TRIPADVISOR
              </li>

            </div>
            {/*Group Three*/}



            <div data-aos="fade-up" data-aos-duration="5000" className="linkgroup">
              <span className="groupTitle">LAST MINUTE </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>LADAKH
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>AGRA
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>AMRITSAR
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>KASHMIR
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>JAIPUR
              </li>

            </div>
          </div>
          <div className="footerDiv flex">
            <small>Aman Tour and Travels</small>
            <small>Copyrights Reserved - JD,Inc 2023</small>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Footer