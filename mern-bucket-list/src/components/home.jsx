import Navbar from './navbar'
const React = require('react')

function Home() {
    return (
      <div>
        <main style={{ display: 'flex', padding: 20, justifyContent: 'center' }}>
        <h1> Hey whats your bucket list?</h1>
      </main>
      <Navbar></Navbar>
      </div>
    )
}

export default Home