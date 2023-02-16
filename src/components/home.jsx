import Navbar from './navbar.jsx'
import { useState, useEffect } from 'react'
import '../styles.css';


const React = require('react')

function Home() {
  const [buckets, setBuckets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4005/api/buckets')
      const json = await response.json()
      setBuckets(json)
    }
    fetchData()
  }, [] )

    return (
      <div>
        <main>
        <h1>Hey, Whats Your Bucket List?</h1>
      </main>
      <Navbar></Navbar>
      <br></br>
        <ul style={{marginTop: '25px', alignContent: 'center'}}>
          { buckets.map((bucket, index ) => {
            <li key={index} style={{paddingRight: '10px'}}>
              <p> {bucket.item},{bucket.difficulty},{bucket.author},{bucket.description}</p>
            </li>
          })}
        </ul>
      </div>
      
    )
}

export default Home