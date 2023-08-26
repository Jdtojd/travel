import React,{useEffect} from 'react'
import './main.css'
// import img from '../../Assets/img1.jpg'
// import img2 from '../../Assets/img2.jpg'
// import img3 from '../../Assets/img3.jpg'
// import img4 from '../../Assets/img4.jpg'
// import img5 from '../../Assets/img5.jpg'
// import img6 from '../../Assets/img6.jpg'
// import img7 from '../../Assets/img7.jpg'
// import img8 from '../../Assets/img8.jpg'
// import img9 from '../../Assets/img9.jpg'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'




const Data = [
  {
    id:1,
    imgSrc:"https://images.pexels.com/photos/12750077/pexels-photo-12750077.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Jammu and Kashmir',
    location:'India',
    grade: 'Scenic',
    fees:'₹7000',
    description:'Jammu and Kashmir, located in northern India, is renowned for its scenic beauty and cultural diversity, yet is marked by complex political history and territorial changes.'
  },


  {
    id:2,
    imgSrc:"https://images.pexels.com/photos/16100356/pexels-photo-16100356/free-photo-of-aerial-view-of-the-golden-temple-amritsar-punjab-india.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Punjab',
    location:'India',
    grade: 'Cultural',
    fees:'₹7000',
    description:'Punjab, situated in northern India, is known for its vibrant culture, fertile plains, and significant historical and religious sites.'
  },


  {
    id:3,
    imgSrc:"https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Uttrakhand',
    location:'India',
    grade: 'Himalayan',
    fees:'₹7000',
    description:'Uttarakhand, nestled in the Himalayas of northern India, is famed for its spiritual centers, breathtaking landscapes, and adventure tourism.'
  },


  {
    id:4,
    imgSrc:"https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Himachal Pradesh',
    location:'India',
    grade: 'Hill Stations',
    fees:'₹7000',
    description:'Himachal Pradesh, in northern India, is celebrated for its hill stations, snowy peaks, and diverse culture, making it a popular tourist destination.'
  },

  {
    id:5,
    imgSrc:"https://images.pexels.com/photos/6440428/pexels-photo-6440428.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Rajasthan',
    location:'India',
    grade: 'Desert',
    fees:'₹7000',
    description:'Rajasthan, located in northwestern India, captivates with its desert charm, majestic forts, and rich heritage, offering a glimpse into India royal past.'
  },

  {
    id:6,
    imgSrc:"https://images.pexels.com/photos/8462313/pexels-photo-8462313.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Kerala',
    location:'India',
    grade: 'Backwaters',
    fees:'₹7000',
    description:'Kerala, in southwestern India, is known for its lush backwaters, serene beaches, and vibrant culture, often referred to as "Gods Own Country."'
  },

  {
    id:7,
    imgSrc:"https://images.pexels.com/photos/11622977/pexels-photo-11622977.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Meghalaya',
    location:'India',
    grade: 'Lush',
    fees:'₹7000',
    description:'Meghalaya, situated in northeastern India, is famed for its stunning landscapes, living root bridges, and being one of the wettest places on Earth.'
  },

  {
    id:8,
    imgSrc:"https://images.pexels.com/photos/16691417/pexels-photo-16691417/free-photo-of-port-on-ganges-river-in-varanaci.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Kashi Vishwanath',
    location:'India',
    grade: 'Temple',
    fees:'₹7000',
    description:'Kashi Vishwanath, located in Varanasi, India, is one of the holiest Hindu temples dedicated to Lord Shiva, attracting pilgrims and visitors for centuries.'
  },

  {
    id:9,
    imgSrc:"https://images.pexels.com/photos/17875111/pexels-photo-17875111/free-photo-of-sunset-sky-over-victoria-memorial-in-kolkata.jpeg?auto=compress&cs=tinysrgb&w=600",
    destTitle:'Kolkata',
    location:'India',
    grade: 'Historic',
    fees:'₹7000',
    description:'Kolkata, situated in eastern India, is renowned for its historical significance, cultural richness, and as the intellectual and artistic hub of the country.'
  }
]





const Main = () => {
  
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])


 
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destination</h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div keu={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>

              </div>
            )
          })
        }
          
      </div>
    </section>
  )
}

export default Main