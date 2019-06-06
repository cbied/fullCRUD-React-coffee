import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inEditMode: false,
            name: '',
			price: '',
        }
    }

    changeEditMode = () => {
        this.setState({ inEditMode: !this.state.inEditMode })
    }

    renderEditView = () => {
        return <div className="Product" >
        <img src={this.props.image} alt={this.props.name}/>
        <div className="productInfo" onDoubleClick={this.changeEditMode}>
            <input type="text" defaultValue={this.props.name}></input>
            <input type="text" defaultValue={this.props.price}></input>
        </div>
        <button onClick={this.changeEditMode}>Done</button>
        </div>
    }

    renderDefaultView = () => {
        return <div className="Product" onDoubleClick={this.changeEditMode}>
        <img src={this.props.image} alt={this.props.name}/>
        <div className="productInfo">
            <h4>{this.props.name}</h4>
            <h4>{this.props.price}</h4>
            <Link to='/' onClick={() => this.props.deleteOneFn(this.props.id)}>Delete</Link>
            <Link to={`/edit/${this.props.id}`}>Edit</Link>
        </div>
    </div>
    }

    render() {
        return (
            this.state.inEditMode ?
            this.renderEditView()
             :
            this.renderDefaultView()
            
        );
    }
    
}

export default Product
