import { Link } from 'react-router-dom'
import '../styles.css'

export default function Navbar() {
    return(
        
        <nav className='nav' >
            <img src='' alt=''></img>
            <div className='buttons'>

                 {/* temporary link */}
                <Link to='/'>
                    <br />
                    <button className="btn-primary">Intro</button>
                </Link>

                <Link to='/Home'>
                    <br></br>
                    <button className='btn-primary'>Home</button>
                </Link>
                
                <Link to='/Create'>
                    <br />
                    <button className="btn-primary">Create</button>
                </Link>

                 {/* temporary link */}
                <Link to='/Edit'>   
                    <br></br>
                    <button className='btn-primary'>Edit</button>
                </Link>

                 {/* temporary link */}
                <Link to='/Delete'>
                    <br />
                    <button className="btn-primary">Delete</button>
                </Link>
            </div>
            <img src='' alt=''></img>
        </nav>
        
    )
}