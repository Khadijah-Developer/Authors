import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthorForm = (props) => {
    const { name,handleChange ,handleSubmit} = props;
    return ( 
        <div className="container border">
            <h1 className="display-4 text-center text-primary m-4">Favorite authors</h1>
           
            <form onSubmit={handleSubmit} >
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label text-primary h1"> Name:</label>
                    <div className="col-sm-10">     
                    <input type="text" className="form-control" name='name' onChange={handleChange} value={name} />
                     </div>
                </div>

                <button className="btn btn-primary m-2" >Submit</button>
                 <Link to={`/`}>
                            <h5 className="btn btn-secondary m-2">Cancel</h5>
                </Link>  
            </form>
        </div>
     );
}
 
export default AuthorForm;