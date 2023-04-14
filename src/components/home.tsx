import Navbar from './navbar.jsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css';
import Table from 'react-bootstrap/Table';

const React = require('react')

function Home() {

  const [buckets, setBuckets] = useState(null)
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api')
      const JSON = await response.json()
      setBuckets(JSON)
    }
    fetchData()
  }, [])

    return (

      <div style={{ height: '900px'}}>
        <div style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
            <h1> Hey, Whats Your Bucket List?</h1>
        </div>
        <Navbar></Navbar>
        <br></br>
        <main>
          {buckets && (
            <div>
              <Table striped hover variant="dark" style={{maxWidth: "90%", marginLeft: "5%"}}>
                  <thead>
                    <tr>
                      <th>Bucket List Item</th>
                      <th>Difficulty</th>
                      <th>Author</th>
                      <th>Description</th>
                    </tr>
                  </thead>
              {buckets.map((bucket, index) => {
                return(
                  
                  <tbody key={index}>
                    <tr key={index}> 
                        <td ><Link style={{textDecoration: "none", color: '#9FD20B'}} to={`/Edit/${bucket.id}`}> {bucket.name}</Link></td>
                        <td style={{color: '#9FD20B'}} >{bucket.difficulty} </td>
                        <td style={{color: '#9FD20B'}}>{bucket.author} </td>
                        <td style={{color: '#9FD20B'}}>{bucket.description}</td>
                    </tr>
                  </tbody>
                  
                )})}
                </Table>
            </div>
          )}
        </main>
      </div>
      
    )
}

export default Home