import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { authorId, successCallback } = props;
    
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/authors/delete/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return ( 
            <button className="btn btn-danger m-1" onClick={deletePerson}>
            Delete
        </button>
     );
}
 
export default DeleteButton;