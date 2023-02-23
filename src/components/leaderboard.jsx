import Navbar from './navbar.jsx'
import Table from 'react-bootstrap/Table';
import casper from '../assets/leaderBoard/casper.jpeg'
import moaningMyrtle from '../assets/leaderBoard/moaningMyrtle.jpeg'
import hulk from '../assets/leaderBoard/hulk.png'
import bb from '../assets/leaderBoard/Bugs_Bunny.png'
const React = require('react')

export default function Leaderboard() {
    return(
        <div>
            <main>
             <h1>Leaderboard</h1>
             </main>
        <Navbar></Navbar>
        <br/>
        <br/>
    <Table striped bordered hover variant="dark" id="formStyle">
      <thead>
        <tr>
          <th>Rank#</th>
          <th>Name </th>
          <th>Completed</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td style={{color: '#9FD20B'}}>1</td>
          <td style={{color: '#9FD20B'}}>
          <img alt="casper, the ghost" className='img_lead' src={casper}></img><br/>Casper</td>
          <td style={{color: '#9FD20B'}}>486</td>
          <td  style={{color: '#9FD20B'}} className='table_length_comment'>This bucket list has changed my life. Come with me if you want to live!! </td>
        </tr>
        <tr>
          <td style={{color: '#9FD20B'}}>2</td>
          <td style={{color: '#9FD20B'}}>
          <img alt="cartoon of moaning myrtle from harry potter" className='img_lead' src={moaningMyrtle}></img><br/>Moaning Myrtle
          </td>
          <td style={{color: '#9FD20B'}}>394</td>
          <td style={{color: '#9FD20B'}}> Be careful! Remember, if you die while doing one of the bucket list items, you're welcome to share my toilet! </td>
        </tr>
        <tr>
          <td style={{color: '#9FD20B'}}>3</td>
          <td style={{color: '#9FD20B'}}>
          <img alt="cartoon drawing of hulk"className='img_lead' src={hulk}></img><br/>Hulk
          </td>
          <td style={{color: '#9FD20B'}}>332</td>
          <td style={{color: '#9FD20B'}}>Thats my secret cap.... I enjoy this bucket list!</td>
        </tr>
        <tr>
          <td style={{color: '#9FD20B'}}>4</td>
          <td style={{color: '#9FD20B'}}>
          <img alt="cartoon drawing of bugs bunny holding a carrot"className='img_lead' src={bb}></img><br/>Bugs Bunny
          </td>
          <td style={{color: '#9FD20B'}}>243</td>
          <td style={{color: '#9FD20B'}}>Don't take life too seriously. You'll never get out alive!</td>
        </tr>
      </tbody>
    </Table>
    </div>
    )
}