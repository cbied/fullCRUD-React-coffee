import React from 'react';
import {Link} from 'react-router-dom';

const Product = (props) =>{
    return (
        <div className="Product" >
            <img src={props.image} alt={props.name}/>
            <div className="productInfo">
                <h4>{props.name}</h4>
                <h4>{props.price}</h4>
                <Link to='/' onClick={() => props.deleteOneFn(props.id)}>Delete</Link>
                <Link to={`/edit/${props.id}`}>Edit</Link>
            </div>
        </div>
    );
}

export default Product
