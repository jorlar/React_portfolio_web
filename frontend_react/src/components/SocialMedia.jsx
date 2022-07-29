import React from 'react';
import {FaFacebookF, FaLinkedin, FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        
        <div>
          
            <a href="https://www.facebook.com/joern.larsen"><FaFacebookF /></a>
          
        </div>
        <div>
          <a href='https://www.linkedin.com/in/j%C3%B8rn-erlend-wangensteen-larsen-9633aa20/'>
            <FaLinkedin />
            </a>
        </div>
        <div>
          <a href='https://github.com/jorlar'>
            <FaGithub />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia