import Navbar from './navbar.jsx'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css';
import Table from 'react-bootstrap/Table';


const React = require('react')

function Home() {
  // console.log(supabase)

  const [fetchError, setFetchError] = useState(null)
  const [buckets, setBuckets] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from('buckets')
      .select()

      if (error) {
        setFetchError('Could not fetch the bucket list items')
        setBuckets(null)
        console.log(error)
      }
      if (data) {
        setBuckets(data)
        setFetchError(null)
        console.log(data)
      }
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
          {fetchError && (<p>{fetchError}</p>)}



     
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
              {buckets.map(bucket => {
                return(
                  
                  <tbody>
                    <tr key={bucket.bucket_id}> 
                        
                        <td ><Link id='homeTableBodyColor' style={{textDecoration: "none"}} to={`/Edit/${bucket.bucket_id}`} > {bucket.name}</Link></td>
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