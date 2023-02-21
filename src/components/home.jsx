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
      const response = await fetch('http://localhost:4005/api')
      const JSON = await response.json()
      setBuckets(JSON)
    }
    fetchData()
  }, [])

    return (

      <div>
        <div>
            <h1> Hey, Whats Your Bucket List?</h1>
        </div>
        <Navbar></Navbar>
        <br></br>
        <main>
          {buckets && (
            <div>
              <Table bordered hover id="formStyle">
                  <thead>
                    <tr>
                      <th id='homeTableHeaderColor'>Bucket List Item</th>
                      <th id='homeTableHeaderColor'>Difficulty</th>
                      <th id='homeTableHeaderColor'>Author</th>
                      <th id='homeTableHeaderColor'>Description</th>
                    </tr>
                  </thead>
              {buckets.map((bucket, index) => {
                return(
                  

                  <tbody key={index}>
                    <tr key={index}> 
                        <td ><Link id='homeTableBodyColor' style={{textDecoration: "none", color: 'white'}} to={`/Edit/${bucket.id}`}> {bucket.name}</Link></td>
                        <td>{bucket.difficulty} </td>
                        <td>{bucket.author} </td>
                        <td>{bucket.description}</td>
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