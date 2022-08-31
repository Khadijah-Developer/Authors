import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const Home = () => {
    const [authors, setAuthors] = useState([]);
            useEffect(() => {
                    axios.get('http://localhost:8000/api/authors/')
                        .then(res => {
                            console.log(res)
                            setAuthors(res.data.authors)
                        })
                    .catch(err => console.error(err))
            }, [])
    
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }
    return (
        <div className="container mt-5">
            <h1 className="display-3 text-primary">Favorite authors</h1>
              <Link to={`/new`}>
                            <h5 className="btn btn-outline-dark m-1">Add an Author</h5>
            </Link> 
              <h3 className="text-warning">We have quotes by:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action available</th>
                    </tr>
                </thead>
                <tbody>
                  
                        
            {authors.map((author, idx) => (
             <tr key={idx} className='m-1'>
                <td className='m-2 h6'>
                    {author.name}
                </td>
                <td className="">
                        <Link to={`/edit/${author._id}`}>
                            <h5 className="btn btn-primary m-1">Edit</h5>
                        </Link>   

                        <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                </td>
             </tr>
            ))}
                  
                </tbody>
            </table>
        </div>
      );
}
 
export default Home;