
import LogoTitle from '../../assets/images/K_Color.png'
import { Link} from 'react-router-dom'

import './index.scss';

const Home= () => {
  return(
    <div className="container home-page">

        <div className="text-zone">
            <h1>Hi <br></br>I'm
            <img src={LogoTitle} alt="developer"></img>
            eneth,
            <br></br>
            web developer
            </h1>
            <h2>Frontend Developer / Javascript expert / React Entrepenour</h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>
    </div>
  )
}

export default Home