import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 People requested access in last 24 hrs.</p>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai"/>
        </div>
      </div>
    </div>
  )
}

export default Header
