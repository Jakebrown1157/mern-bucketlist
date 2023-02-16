import Navbar from './navbar.jsx'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import skull from '../assets/skull.png'
import '../styles.css';



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

      <div style={{ height: '900px'}}>
        <div style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
            <h1> Hey, Whats Your Bucket List?</h1>
        </div>
        <Navbar></Navbar>
        <br></br>
        <main style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
          {fetchError && (<p>{fetchError}</p>)}
          {buckets && (
            <div className='mainList'>

              {buckets.map(bucket => {
                return(
                  <div style={{display: 'flex'}} key={bucket.bucket_id}> 
                    
                    <Link to={`/Edit/${bucket.bucket_id}`} className='column_1'> {bucket.name}</Link> 
                    <p className='column_2'> {bucket.difficulty} <img src={skull} alt="skull" height={25} width={25}/> </p>
                    <p className='column_3'> {bucket.author} </p>
                    <p className='column_4'> {bucket.description}</p>
                  </div>
                )
              })}

            </div>
          )}
        </main>
      </div>
      
    )
}

export default Home