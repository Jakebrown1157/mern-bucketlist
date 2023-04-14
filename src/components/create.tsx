import Navbar from './navbar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles.css'
import {event, target} from '../interfaces/handleSubmit'
const React = require('react')


export default function Create() {
 
    const [data, setData] = useState({
        name: "",
        difficulty: 0,
        author: "",
        description: ""
    });
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/Home')
            try {
                const response = await fetch('/api/create', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return await response.json();
            } catch (error) {
                console.error(error);
        }
    }

     const handleChange = (event: event ) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    // wasent sure how to go about adding onChange typing 
    return (
        <div>
            <main>
                <h1>Create Bucket Page</h1>
                <Navbar></Navbar>
            </main>
            <br/>
            <Form onSubmit={handleSubmit} >
                <Form.Group id='formStyleGroup' className="mb-3" controlId="activity">
                    <Form.Label>Bucket List Activity</Form.Label>
                    <Form.Control type='text' name="name" onChange={handleChange} placeholder="Activity"></Form.Control>
                </Form.Group>

                <Form.Group id='formStyleGroup' className="mb-3" controlId="Difficulty">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Control type='number' name="difficulty" onChange={handleChange} placeholder="Difficulty" min={0} max={3}></Form.Control>
                </Form.Group>

                <Form.Group id='formStyleGroup' className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type='text' name="author" onChange={handleChange} placeholder="Author"></Form.Control>
                </Form.Group>

                <Form.Group id='formStyleGroup' className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' name="description" onChange={handleChange} placeholder="description"></Form.Control>
                </Form.Group>

                <br/>
                
                <Button style={{marginLeft: "10%"}} variant="primary" type="submit">Create</Button>

            </Form>
        </div>
    )
}


