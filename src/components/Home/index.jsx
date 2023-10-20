
import LogoTitle from '../../assets/images/K_Color.png'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Lenguages from '../Lenguages'
import Carrusel from '../Swiper'
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'n', 'e', 't', 'h',]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  
   // Utiliza useRef para crear una referencia mutable a tu componente montado.
   const isMounted = useRef(true);


   useEffect(() => {
    // Cuando el componente se monta, establece isMounted en true.
    isMounted.current = true;

    const timerId = setTimeout(() => {
      if (isMounted.current) {
        setLetterClass('text-animate-hover');
      }
    }, 4000);

    // En el efecto de limpieza, cambia isMounted a false cuando el componente se desmonta.
    return () => {
      isMounted.current = false;
      clearTimeout(timerId);
    };
  }, []);
  

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / React Entusiast / Engineer</h2>
          <br></br>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>  
        <br></br>
      <div className="swiper-section">    
       <Carrusel></Carrusel>
      </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
