import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Birthday from '../images/Birthday_cake.png'

const Event = () => {
  const currentLocation = useLocation();

  if(!currentLocation.state){
    return (
      <section className='event_container'>
      <div className='event_image_container'>
        <img src={Birthday} alt='Event image' className='event_image' />
      </div>

        <h1 className='event_info'>Sorry, no event created yet!</h1>
    </section>
    )
  }

  const {
    state: {
      eventInfo: { eventName, hostName, startTime, endTime, location, image },
    },
  } = currentLocation

  return (
    <section className='event_container'>
      <div className='event_image_container'>
        <img src={image} alt='Event image' className='event_image' />
      </div>

      <ul className='event_info'>
        <li>
          <ul>
            <li>
              <h2 className='event_name'>{eventName}</h2>
            </li>
            <li>
              <p className='host_name'>
                Hosted by <span>{hostName}</span>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul className='event_first_container'>
           <li>
            <ul className='flex'>
            <li className='icon_container'>
              <FaRegCalendarAlt className='icon' />
            </li>
            <li>
              <ul className='spacing'>
              <li className='info'>{startTime}</li>
                <li className='info_two'>to {endTime} UTC+10 </li>
              </ul>
            </li>
            </ul>
           </li>
           <li>
              <MdKeyboardArrowRight />
            </li>
          </ul>
        </li>

          <li>
          <ul className='event_first_container'>
          
            <li>
              <ul className='flex'>
              <li className='icon_container'>
              <GoLocation className='icon' />
            </li>
            <li>
            <ul className='spacing'>
              <li className='info'>Street name</li>
                <li className='info_two'>{location}</li>
              </ul>
            </li>
   
              </ul>
            </li>
            <li>
              <MdKeyboardArrowRight />
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Event;
