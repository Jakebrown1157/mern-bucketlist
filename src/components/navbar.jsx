import { Link } from 'react-router-dom'
import '../styles.css'
import heybucket from '../assets/heybucket.png'
import dontkickbucket from '../assets/dontkickbucket.png'

export default function Navbar() {
    return(
        
        <nav className='nav' >
            <img src={heybucket} alt="Hey bucket logo" height={150} width={150}/>
            <div className='buttons'>

                 {/* temporary link */}

                <Link to='/'>
                    <br />
                    <button type="button" className="btn btn-warning">Intro</button>
                </Link>

                <Link to='/Home'>
                    <br></br>
                    <button type="button" className="btn btn-primary">Home</button>
                </Link>
                
                <Link to='/Create'>
                    <br />
                    <button type="button" className="btn btn-success">Create</button>
                </Link>

                 {/* temporary link */}
                <Link to='/Edit'>   
                    <br></br>
                    <button type="button" className="btn btn-info">Edit</button>
                </Link>

                 {/* temporary link */}
                <Link to='/Leaderboard'>
                    <br />
                    <button type="button" className="btn btn-dark">Leaderboard</button>
                </Link>
            </div>
            <img src={dontkickbucket} alt="Dont kick bucket" height={150} width={150}/>
        </nav>
        
    )
}