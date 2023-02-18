import { Link } from 'react-router-dom'
import '../styles.css'
import heybucket from '../assets/heybucket.png'


function Intro() {
    return(
        <div >
            <nav>
                <img className="img_i" src={heybucket} alt="Hey bucket logo" />
               
            </nav>
            <br></br>
            <div className='intro'>
                <p className='intro_p'>
                <p>My partner asked me if I'd ever seen "The Bucket List."
                I said no, but I'd like to before I die.</p>

                <p>Find out whats on people's bucket list and add some ideas of your own!</p>
                <p>  Are you just living or are you alive?</p> 

                </p>
            </div>
            <br></br>
            <Link to='/home' style={{ display: 'flex', padding: 20, justifyContent: 'center', width: '80vw', margin: 'auto' , textDecoration: "none"}}>
                <br></br>
                <button type="button" className="btn btn-danger">ENTER IF YOU DARE!!</button>
            </Link>
        </div>
    )
}

export default Intro


