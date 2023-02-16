import { Link } from 'react-router-dom'
import '../styles.css'
import heybucket from '../assets/heybucket.png'


function Intro() {
    return(
        <div >
            <nav style={{display: 'flex'}}>
                <img className="img_i" src={heybucket} alt="Hey bucket logo" />
               
            </nav>

            <div className='intro'>
                <div style={{width: '60vw', margin: 'auto', padding: '20px'}}>
                <p>My partner asked me if I'd ever seen "The Bucket List."</p>
                <p>I said no, but I'd like to before I die.</p>
                <p>Find out whats on people's bucket list and add some ideas of your own!  Are you just living or are you alive?</p> 
                </div>
            </div>
            <br></br>
            <Link to='/home' style={{ display: 'flex', padding: 20, justifyContent: 'center', width: '80vw', margin: 'auto'}}>
                <br></br>
                <button type="button" className="btn btn-danger">ENTER IF YOU DARE!!</button>
            </Link>
        </div>
    )
}

export default Intro


