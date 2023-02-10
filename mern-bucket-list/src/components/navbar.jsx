
import '../styles.css'

export default function Navbar() {
    return(
        
        <div style={{ display: 'flex', padding: 20, justifyContent: 'center', backgroundColor: 'grey'}}>

            <a href='/home' style={{ margin: '10px'}}>
                <br></br>
                <button className='btn-primary'>Home</button>
            </a>
            <a href="/create" style={{ margin: '10px' }}>
             <br />
             <button className="btn-primary">create</button>
            </a>
            {/* <a href="/" style={{ margin: '10px' }}>
             <br />
             <button className="btn-primary">Completed</button>
            </a>
            <a href="/" style={{ margin: '10px'}}>
                <br />
                <button className="btn-primary">About</button>
            </a> */}
            
        </div>
        
    )
}