import React from 'react';
import { Link } from 'react-router-dom';
import homePage from '../images/home_page.png';
const Home = () => {
  return (
    <div className='main'>
      <div className='first_container'>
        <ul className='header_one'>
          <li>
            <h1 className='header'>Imagine if </h1>
          </li>
          <li className='span'>
            <span>Snapchat</span>
          </li>
          <li>
            <h2 className='header'>had events</h2>
          </li>
        </ul>
        <div className='paragraph_container'>
        <p className='paragraph'>
          Easily host and share events with your friends across any social media
        </p>
        </div>
    
      </div>
      <div className='image_ticket_container'>
      <img src={homePage} alt='Ticket image'  className='image'  />
      </div>
      
      <div className='event_button_container absolute'>
        <Link to='/create' className='event_button'>
          <button className='button'>🎉 Create my event</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
