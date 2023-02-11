import Navbar from './navbar.jsx'
const React = require('react')

function Home() {
    return (
      <div>
        <main style={{ display: 'flex', padding: 20, justifyContent: 'center' }}>
        <h1> Hey whats your bucket list? Alex Was here</h1>
      </main>
      <Navbar></Navbar>
      </div>
    )
}

export default Home