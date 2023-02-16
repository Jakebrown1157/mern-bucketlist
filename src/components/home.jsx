import Navbar from './navbar.jsx'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'


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
        <main style={{ position: 'relative', left: '200px', top: '10px'}}>
          {fetchError && (<p>{fetchError}</p>)}
          {buckets && (
            <div className='mainList'>

              {buckets.map(bucket => {
                return(
                  <div> {bucket.name} </div>
                )
              })}

            </div>
          )}
        </main>
      </div>
      
    )
}

export default Home