import Navbar from './navbar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles.css'
import { Link } from 'react-router-dom'

export default function Create() {
 
    // const [data, setData] = useState({})
    // const[id, setID] = useState('2')
    // const[name, setName] = useState('')
    // const[difficulty, setDifficulty] = useState('')
    // const[author, setAuthor] = useState('')
    // const[description, setDescription] = useState('')

    // const [bucket, setBucket] = useState({
    //     id: 2,
    //     name: '',
    //     difficulty: '',
    //     author: '',
    //     description: ''
    // })
   const navigate = useNavigate()

//     const handleSubmit = () => {
//         navigate('/home');
//       };
    //     if(!name || !difficulty || !author || !description) {
    //         setFormError('please fill out all the empty fields')
    //         return
    //     }
        
    //     const { data, error } = await supabase
    //         .from('buckets')
    //         .insert([{name, difficulty, author, description}])
    //         .select()

    //     if (error) {
    //         setFormError('please fill out all the fields correctly')
    //         console.log(error)
    //     }
    //     if (data) {
    //         console.log(data)
    //         setFormError(null)
    //         
    //     }
    // }
    // async function handleBucket(e) {
    //     setBucket(bucket.name = name, bucket.difficulty = difficulty, bucket.author = author, bucket.description = description)
    //     return
    // }
                                // async function handleSubmit(e) {
                                //         // await handleBucket()
                                //         e.preventDefault();
                                //         try{
                                //             const response = await fetch('http://localhost:4005/api/create',{
                                //                 method: 'POST',
                                //                 header: {
                                //                     'Content-Type': 'application/json'
                                //                 },
                                //                 body: JSON.stringify(data)
                                //             });
                                //             return await response.json()
                                //         } catch (err) {
                                //             console.log(err)
                                //         }
                                //         navigate('/home');
                                //     }
                                //     const handleChange = e => {
                                //         console.log(data)
                                //         setData({...data, [e.target.name]: e.target.value})
                                //     }
    // const handleName = e => {
    //     setName({...bucket, [e.target.name]: e.target.value});
    // }
    // const handleDifficulty = e => {
    //     setDifficulty({...bucket, [e.target.name]: e.target.value})
    // }
    // const handleAuthor = e => {
    //     setAuthor({...bucket, [e.target.name]: e.target.value})
    // }
    // const handleDescription = e => {
    //     setDescription({...bucket, [e.target.name]: e.target.value})
    // }
    return (
        <div>
            <main>
                <h1>Create Bucket Page</h1>
            </main>
            <Navbar></Navbar>
            <Form method='POST' action='http://localhost:4005/api/create' onSubmit={<Link to='/home'></Link>}>
                <Form.Group className='mb-3' controlId='id'>
                    <Form.Label>Bucket List id</Form.Label>
                    <Form.Control type='number' name='id' placeholder='id'></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="activity">
                    <Form.Label>Bucket List Activity</Form.Label>
                        {/* <Form.Control type='text' value={name} onChange={(e) => setData(e.target.value)} placeholder="Activity"></Form.Control> */}
                        {/* <Form.Control type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='name'></Form.Control> */}
                        <Form.Control type='text' name='name' placeholder='name' ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Difficulty">
                    <Form.Label>Difficulty</Form.Label>
                        {/* <Form.Control type='number' value={difficulty} onChange={(e) => setData(e.target.value)} placeholder="Difficulty" min={0} max={3}></Form.Control> */}
                    {/* <Form.Control type='number' name='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)} placeholder='Difficulty' min={0} max={3}></Form.Control> */}
                        <Form.Control type='number' name='difficulty' placeholder='difficulty' ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                        {/* <Form.Control type='text' value={author} onChange={(e) => setData(e.target.value)} placeholder="Author"></Form.Control> */}
                        {/* <Form.Control type='text' name='author' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author' ></Form.Control> */}
                        <Form.Control type='text' name='author' placeholder='author' ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                        {/* <Form.Control type='text' value={description} onChange={(e) => setData(e.target.value)} placeholder="description"></Form.Control> */}
                        {/* <Form.Control type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description'></Form.Control> */}
                        <Form.Control type='text' name='description' placeholder='description' ></Form.Control>
                </Form.Group>

                    <Button variant="primary" type='submit' >submit</Button>
                </Form>
     </div>
    )
}


