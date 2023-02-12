import Navbar from './navbar.jsx'


const React = require('react')

function Home() {
    return (
      <div>
        <main style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
        <h1> Hey, Whats Your Bucket List?</h1>
      </main>
      <Navbar></Navbar>
      </div>
    )
}

export default Home