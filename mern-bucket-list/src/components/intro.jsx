import { Link } from 'react-router-dom'
import '../styles.css'
import heybucket from '../assets/heybucket.png'


function Intro() {
    return(
        <div >
            <nav style={{display: 'flex'}}>
                <img src={heybucket} alt="Hey bucket logo" class="center" height={350} width={350}/>
               
            </nav>

            <div style={{backgroundColor: 'lightgrey', width: '80vw', margin: 'auto'}}>
                <p style={{width: '60vw', margin: 'auto', padding: '20px'}}>
                    Are you just living or are you alive? Find out whats on people's bucket list and add some ideas of your own! 

                </p>
            </div>
            <br></br>
            <Link to='/home' style={{ display: 'flex', padding: 20, justifyContent: 'center', backgroundColor: 'grey', width: '80vw', margin: 'auto'}}>
                <br></br>
                <button type="button" class="btn btn-secondary">Enter if you dare!!</button>
            </Link>
        </div>
    )
}

export default Intro


