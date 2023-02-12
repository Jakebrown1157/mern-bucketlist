import { Link } from 'react-router-dom'
import '../styles.css'


function Intro() {
    return(
        <div >
            <nav style={{display: 'flex',}}>
                <img src='' alt=''></img>
                <h1 style={{ display: 'flex', padding: 20, justifyContent: 'center', margin: 'auto',  color: 'white'}}> Hey, What's Your Bucket list?</h1>
                <img src='' alt=''></img>
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


