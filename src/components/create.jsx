import Navbar from './navbar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import skull from '../assets/skull.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient.js';

export default function Create() {
    const[name, setName] = useState('')
    const[difficulty, setDifficulty] = useState('')
    const[author, setAuthor] = useState('')
    const[description, setDescription] = useState('')
    const[formError, setFormError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!name || !difficulty || !author || !description) {
            setFormError('please fill out all the empty fields')
            return
        }
        
        const { data, error } = await supabase
            .from('buckets')
            .insert([{name, difficulty, author, description}])
            .select()

        if (error) {
            setFormError('please fill out all the fields correctly')
            console.log(error)
        }
        if (data) {
            console.log(data)
            setFormError(null)
            navigate('/Home')
        }
    }

    return (
        <div>
            <main style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
                <h1>Create Bucket Page</h1>
            </main>
            <Navbar></Navbar>
           
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="activity">
                    <Form.Label>Bucket List Activity</Form.Label>
                        <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Activity"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Difficulty">
                    <Form.Label>Difficulty</Form.Label>
                        <Form.Control type='number' value={difficulty} onChange={(e) => setDifficulty(e.target.value)} placeholder="Difficulty" min={0} max={3}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                        <Form.Control type='text' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author"></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                        <Form.Control type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description"></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Create</Button>
                {formError && <p className='error'>{formError}</p>}
            </Form>
        </div>
    )
}


