import Navbar from './navbar.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
                    <Form.Label>1 skull</Form.Label>
                    <Form.Check type="checkbox1" label="Checkbox 1" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Checkbox2">
                    <Form.Label>2 skulls</Form.Label>
                    <Form.Check type="checkbox2" label="Checkbox 2" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Checkbox3">
                    <Form.Label>3 skulls</Form.Label>
                    <Form.Check type="checkbox3" label="Checkbox 3" />
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