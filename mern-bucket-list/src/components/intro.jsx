import { Link } from 'react-router-dom'

function Intro() {
    return(
        <div >
            <nav style={{display: 'flex',}}>
            <img></img>
            <h1> Hey whats your bucket list?</h1>
            <img></img>
            </nav>
            

            <div style={{Height: '100px', backgroundColor: 'red'}}>discription</div>

            <Link to='/home' style={{ display: 'flex', padding: 20, justifyContent: 'center', backgroundColor: 'grey'}}>
                <br></br>
                <button className='btn-primary'>Enter if you dare!!</button>
            </Link>
        </div>
    )
}

export default Intro


