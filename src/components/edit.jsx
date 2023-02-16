import Navbar from './navbar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import supabase from '../config/supabaseClient'
import '../styles.css';


export default function Edit() {
    const[name, setName] = useState('')
    const[difficulty, setDifficulty] = useState('')
    const[author, setAuthor] = useState('')
    const[description, setDescription] = useState('')
    const[formError, setFormError] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()
    
    const handleDelete = async () => {
        const {data, error} = await supabase
            .from('buckets')
            .delete()
            .eq('bucket_id', id)
            .select()

            if (error) {
                console.log(error)
            }
            if (data) {
                console.log(data)
                setFormError(null)
                navigate('/home')
            }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!name || !difficulty || !author || !description) {
            setFormError('please fill out all the empty fields')
            return
        }

        const { data, error } = await supabase 
            .from('buckets')
            .update({name, difficulty, author, description})
            .eq('bucket_id', id)
            .select()

        if(error){
            console.log(error)
            setFormError('please fill out all the empty fields')
        }

        if(data){
            console.log(data)
            setFormError(null)
            navigate('/home')
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const { data, error} = await supabase
            .from('buckets')
            .select()
            .eq('bucket_id', id)
            .single()

            if (error) {
                navigate('/Home', { replace: true })
            }
            if (data) {
                setName(data.name)
                setDifficulty(data.difficulty)
                setAuthor(data.author)
                setDescription(data.description)
                console.log(data)
            }
        }
        fetchData()

    }, [id, navigate])

    return(
    <main>
        <div style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
             <h1>Edit Bucket Page</h1>
        </div>
            <Navbar></Navbar>

            <div>
            <Form onSubmit={handleSubmit}>
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

                <Button variant="primary" type="submit">Update Activity</Button>
                <Button variant="danger" onClick={handleDelete}>Delete Activity</Button>
                {formError && <p className='error'>{formError}</p>}
            </Form>
        </div>
     </main>
    )
}
