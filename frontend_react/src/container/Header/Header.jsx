import React from 'react';
import { motion } from 'framer-motion';
import {images} from '../../constants'
import {AppWrapp} from '../../wrapper'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}


const Header = () => {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100, 0], opacity: [0,1]}}
      transition={{duration:1.0}}
      className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'> Hi, My name is </p>
              <h1 className='head-text'>Jørn</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className='p-text'>Systemdeveloper</p>
            <p className='p-text'>Webdeveloper</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>


      <motion.div 
      whileInView={{opacity: [0,1]}}
      transition={{duration:1.0, delayChildren: 0.5}}
      className="app__header-img">
        <img src={images.profile} alt="Profile_bg"></img>
        <motion.img
        whileInView={{scale: [0,1]}}
        transition={{duration:1.0, ease: 'easeInOut'}}
        src={images.circle}
        alt="profile_circle"
        className="overlay-circle" />
      </motion.div>
    
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.react, images.sass, images.javascript, images.git].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapp(Header, 'Home')