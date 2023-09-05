import React from 'react';
import { Form, Button } from 'react-bootstrap';


const SearchBar = () => {
  return (
    <div className='mt-3 d-flex justify-content-center'>
      <h2>Find Gym near you</h2>
      <Form className='mx-3 d-flex justify-content-center'>
        <Form.Group controlId="searchGym">
          <Form.Control type="text" placeholder="Enter location" />
        </Form.Group>
        <Button variant="dark" type="submit" className='mx-3'>
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchBar