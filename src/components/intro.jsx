import { Link } from 'react-router-dom'
import '../styles.css'
import heybucket from '../assets/heybucket.png'


function Intro() {
    return(
        <div >
            <nav style={{display: 'flex'}}>
                <img src={heybucket} alt="Hey bucket logo" className="center" height={350} width={350}/>
               
            </nav>

            <div style={{backgroundColor: 'lightgrey', width: '80vw', margin: 'auto'}}>
                <p style={{width: '60vw', margin: 'auto', padding: '20px'}}>
                My partner asked me if I'd ever seen "The Bucket List."

                I said no, but I'd like to before I die.

               Find out whats on people's bucket list and add some ideas of your own!  Are you just living or are you alive? 

                </p>
            </div>
            <br></br>
            <Link to='/home' style={{ display: 'flex', padding: 20, justifyContent: 'center', backgroundColor: 'grey', width: '80vw', margin: 'auto'}}>
                <br></br>
                <button type="button" className="btn btn-danger">Enter if you dare!!</button>
            </Link>
        </div>
    )
}

export default Intro


