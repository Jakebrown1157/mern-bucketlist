import Navbar from './navbar.jsx'
import Table from './table.jsx'


const React = require('react')

function Home() {
    return (
      <div>
        <main style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
        <h1> Hey, Whats Your Bucket List?</h1>
      </main>
      <Navbar></Navbar>
      <br></br>
      <Table></Table>
      </div>
      
    )
}

export default Home