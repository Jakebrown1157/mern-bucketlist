import Navbar from './navbar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import skull from '../assets/skull.png'


export default function Create() {
    return (
        <div>
            <main style={{ display: 'flex', padding: 20, justifyContent: 'center', color: 'white' }}>
                <h1>Create Bucket Page</h1>
            </main>
            <Navbar></Navbar>
            <Form>
                <Form.Group className="mb-3" controlId="activity">
                    <Form.Label>Bucket List Activity</Form.Label>
                    <Form.Control type="activity" placeholder="Activity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Checkbox1">
                    <Form.Check type="checkbox1" label="1 Danger Skull"  />
                    <img src={skull} alt="skull" height={25} width={25}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Checkbox2">
                    <Form.Check type="checkbox2" label="2 Danger Skulls" />
                    <img src={skull} alt="skull" height={25} width={25}/>
                    <img src={skull} alt="skull" height={25} width={25}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Checkbox3">
                    <Form.Check type="checkbox3" label="3 Danger Skulls" />
                    <img src={skull} alt="skull" height={25} width={25}/>
                    <img src={skull} alt="skull" height={25} width={25}/>
                    <img src={skull} alt="skull" height={25} width={25}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="author" placeholder="Author" />
                </Form.Group>
                <Button variant="primary" type="create">
                    Create
                </Button>
            </Form>
        </div>

    )
}

{/* temporary link */ }