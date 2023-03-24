import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../util/Constants';
import { Form, Button } from 'react-bootstrap';
import "./AddComment.css"

const AddCommentForm = ({ articleId, onCommentAdded }) => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name,body,articleId)
    axios.post(API_URL + '/api/addcomment', {
      author: name,
      body: body,
      articleId: articleId,
    })
    
      .then((response) => {
        onCommentAdded(response.data);
        setName('');
        setBody('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group controlId="body">
        <Form.Label>Comment:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={body}
          onChange={handleBodyChange}
          placeholder="Enter your comment"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddCommentForm;
