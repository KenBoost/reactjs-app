import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
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
            <NavLink exact="true" activeclassname="active" className="about-link" to="/">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>

            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>

            </NavLink>
        </nav>
    </div>
    )
}

export default Sidebar