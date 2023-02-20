import Navbar from './navbar.jsx'
// import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import skull from '../assets/skull.png'
import '../styles.css';
import Table from 'react-bootstrap/Table';


const React = require('react')

function Home() {
  // console.log(supabase)

  const [fetchError, setFetchError] = useState(null)
  const [buckets, setBuckets] = useState(null)
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4005/api')
      const JSON = await response.json()
      setBuckets(JSON)
    }
    fetchData()
  }, [])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase
  //     .from('buckets')
  //     .select()

  //     if (error) {
  //       setFetchError('Could not fetch the bucket list items')
  //       setBuckets(null)
  //       console.log(error)
  //     }
  //     if (data) {
  //       setBuckets(data)
  //       setFetchError(null)
  //       console.log(data)
  //     }
  //   }
    
  //   fetchData()
  // }, [])
  
    return (

      <div style={{ height: '900px'}}>
        <div style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
            <h1> Hey, Whats Your Bucket List?</h1>
        </div>
        <Navbar></Navbar>
        <br></br>
        <main>
          {fetchError && (<p>{fetchError}</p>)}
          {buckets && (
            <div>
              <Table striped bordered hover variant="dark" style={{maxWidth: "90%", marginLeft: "5%"}}>
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
                  
                  <tbody>
                    <tr key={index}> 
                        <td ><Link style={{textDecoration: "none", color: 'white'}} to={`/Edit/${bucket.id}`} > {bucket.name}</Link></td>
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