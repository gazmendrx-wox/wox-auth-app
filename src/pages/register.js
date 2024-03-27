import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { dynamicFetch } from '@/helpers/dynamicFetch';
import Link from 'next/link';

export default function RegisterPage() {
    const [responseStatus, setResponseStatus] = useState(null)
    const [postData, setPostData] = useState({name: null, email: null, password: null})

    const handleFormInput = (e) => {
        const { name, value } = e.target
        setPostData({...postData, [name]: value})
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()

        const response = await dynamicFetch('http://localhost:3001/user/create', 'POST', postData)
        //registration login me dynamicFetch (post)
        console.log(response)

        if(response?.error) {
            console.error('Unable to create account!!')
            setResponseStatus(null)
            return
        }

        setResponseStatus(true)
    }

  return (
    <Container fluid>
      <Row>
        <Col>
            {!responseStatus ?             
                <Form onSubmit={handleSubmitForm}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleFormInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleFormInput} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={handleFormInput}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Create Account
                    </Button>
                </Form> :  <div>Registration Successful - <Link href="/login">Go to login</Link></div>
            }
        </Col>
      </Row>
    </Container>
  );
}
