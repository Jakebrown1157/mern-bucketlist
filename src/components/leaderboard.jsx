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
          <td id='tableData'>1</td>
          <td id='tableData'>
          <img alt="casper, the ghost" className='img_lead' src={casper}></img><br/>Casper</td>
          <td id='tableData'>486</td>
          <td  id='tableData' className='table_length_comment'>This bucket list has changed my life. Come with me if you want to live!! </td>
        </tr>

        <tr>
          <td id='tableData'>2</td>
          <td id='tableData'>
          <img alt="cartoon of moaning myrtle from harry potter" className='img_lead' src={moaningMyrtle}></img><br/>Moaning Myrtle
          </td>
          <td id='tableData'>394</td>
          <td id='tableData'> Be careful! Remember, if you die while doing one of the bucket list items, you're welcome to share my toilet! </td>
        </tr>

        <tr>
          <td id='tableData'>3</td>
          <td id='tableData'>
          <img alt="cartoon drawing of hulk"className='img_lead' src={hulk}></img><br/>Hulk
          </td>
          <td id='tableData'>332</td>
          <td id='tableData'>Thats my secret cap.... I enjoy this bucket list!</td>
        </tr>

        <tr>
          <td id='tableData'>4</td>
          <td id='tableData'>
          <img alt="cartoon drawing of bugs bunny holding a carrot"className='img_lead' src={bb}></img><br/>Bugs Bunny
          </td>
          <td id='tableData'>243</td>
          <td id='tableData'>Don't take life too seriously. You'll never get out alive!</td>
        </tr>

      </tbody>
    </Table>
    </div>
    )
}