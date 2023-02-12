import { Link } from 'react-router-dom'
import '../styles.css'

export default function Navbar() {
    return(
        
        <nav className='nav' >
            <img src='../assets/heybucket.png' alt='Hey, Whats your Bucklist?'></img>
            <div className='buttons'>

                 {/* temporary link */}
                <Link to='/'>
                    <br />
                    <button type="button" class="btn btn-warning">Intro</button>
                </Link>

                <Link to='/Home'>
                    <br></br>
                    <button type="button" class="btn btn-warning">Home</button>
                </Link>
                
                <Link to='/Create'>
                    <br />
                    <button type="button" class="btn btn-warning">Create</button>
                </Link>

                 {/* temporary link */}
                <Link to='/Edit'>   
                    <br></br>
                    <button type="button" class="btn btn-warning">Edit</button>
                </Link>

                 {/* temporary link */}
                <Link to='/Delete'>
                    <br />
                    <button type="button" class="btn btn-warning">Delete</button>
                </Link>
            </div>
            <img src='./assets/dontkckbucket.png' alt='Dont Kick Bucket'></img>
        </nav>
        
    )
}