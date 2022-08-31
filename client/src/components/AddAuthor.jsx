import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { Link } from 'react-router-dom';

const AddAuthor = (props) => {
    const [author, setAuthor] = useState({  name: "" });
    const [authorCreated, setAuthorCreated] = useState(false);
    
    const [errors, setErrors] = useState([]);
    
   const handleChange = (event)=> {
        setAuthor({ ...author, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event)=> {
            event.preventDefault();
            setAuthorCreated(false);
            setErrors([]);
            axios.post('http://localhost:8000/api/authors/new', author)
            .then((response) => {
                setAuthorCreated(true);
            })
          .catch((err) => {
          console.log(err);
        const data = err.response.data;
        const errorMessages = [];
        if ("errors" in data) {
          for (let field in data.errors) {
            const validationError = data.errors[field];
            errorMessages.push(validationError.message);
          }
        }
        setErrors(errorMessages);
          });

        if (author.name.length > 0) {setAuthor({ name: "" })};
    }
    return (<div className="container">
      <h1>Add Author</h1>
         <Link to={`/`}>
                            <h5 className="btn btn-secondary m-2">Home</h5>
      </Link>  
      <h5>Add a new author:</h5>
                {errors.map((errorMessage, index) => (
                    <div key={index} className="alert alert-danger">Error: {errorMessage}</div>
                ))}
                {authorCreated && <div className='alert alert-success'>User has been successfully created</div>}
                    <AuthorForm {...author}  handleChange={handleChange} handleSubmit={handleSubmit} />
    </div> );
}
 
export default AddAuthor;