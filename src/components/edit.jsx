import Navbar from './navbar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../styles.css';

export default function Edit() {
    const [bucket,setBuckets] = useState('')
    const [data, setData] = useState({
        name: "",
        difficulty: 0,
        author: "",
        description: ""
    });
   
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/Home')
        
            try {
                const response = await fetch(`http://localhost:4005/api/Edit/:id`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await response.json();
            } catch (error) {
                console.error(error);
    }

   const handleChange = async () => {
        setData({...data, [e.target.name]: e.target.value})
   }
   
   const fetchData = async () => {
    const response = await fetch('http://localhost:4005/api:id')
    const JSON = await response.json()
    setBuckets(JSON)
  }
  fetchData()
  return(
    <main>
        <div style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
             <h1>Edit Bucket Page</h1>
        </div>
            <div>
            <Navbar></Navbar>
          
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="activity">
                    <Form.Label>Bucket List Activity</Form.Label>
                        <Form.Control type='text' name="name" onChange={handleChange} defaultValue={bucket.name}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Difficulty">
                    <Form.Label>Difficulty</Form.Label>
                        <Form.Control type='number' name="difficulty" onChange={handleChange} defaultValue={bucket.difficulty} min={0} max={3}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                        <Form.Control type='text' name="author" onChange={handleChange} defaultValue={bucket.author}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                        <Form.Control type='text' name="description" onChange={handleChange} defaultValue={bucket.description}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Create</Button>
            </Form>
        </div>
     </main>
    )
    }
}