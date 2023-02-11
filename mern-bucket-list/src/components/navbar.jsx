import { Link } from 'react-router-dom'
import '../styles.css'

export default function Navbar() {
    return(
        
        <nav className='nav' >
            <img src='' alt=''></img>
            <div className='buttons'>
                <Link to='/Home'>
                    <br></br>
                    <button className='btn-primary'>Home</button>
                </Link>
                
                <Link to='/Create'>
                    <br />
                    <button className="btn-primary">create</button>
                </Link>
            </div>
            <img src='' alt=''></img>
        </nav>
        
    )
}