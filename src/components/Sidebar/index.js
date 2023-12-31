import './index.scss'
//import { useState } from 'react'
import LogoS from '../../assets/images/K_Color.png'
import LogoSubtitle from '../../assets/images/K_Name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  
  faEnvelope,
  //faSuitcase,
  //faBars,
  //faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () =>  {
    return(
    <div className='nav-bar'>
        <Link className = 'logo' to='/' >
            <img src = {LogoS} alt = "logo"></img>
            <img className='sub-logo' src  = {LogoSubtitle} alt = "slobodan"></img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>

            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>

            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>

            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/KenetMC'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/KenBoost'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/KenetMC'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar