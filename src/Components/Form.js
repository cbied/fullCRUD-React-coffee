import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            image_url: 'https://semantic-ui.com/images/wireframe/image.png',
            redirect: false
        }

        this.handleChange= this.handleChange.bind(this);
		this.handleAdd= this.handleAdd.bind(this);
		this.handleEditSave= this.handleEditSave.bind(this);
    }

    componentDidMount() {
        if(this.props.match.params.coffee_id) {
            axios
                .get(`.api/coffee/${this.props.params.coffee_id}`)
                .then(response => {
                    this.setState({
                        name: response.data[0].name,
                        price: response.data[0].price,
                        image_url: response.data[0].image_url,
                        redirect: false
                    })
                })
                .catch(error => console.log(`Form-getCoffeeId: ${error}`))
        } else {
            this.setState({
				name: '',
				price: '',
				image_url: '',
				redirect: false,
			})
        }
    }

    componentDidUpdate(prevProps){
		if(this.props.match.params.id!==prevProps.match.params.id){
			this.setState({
				name: '',
				price: '',
				image_url: '',
				redirect: false,
			})
		}
    }
    
    handleChange(e) {
        this.setState({ [ e.target.name ]: e.target.value })
    }

    handleAdd() {
        let { name, price, image_url, } = this.state;
        axios
            .post('/api/coffee', { name:name, price:price, image_url:image_url })
            .then(this.setState({ redirect:true }))
            .catch(error => console.log(`Form-axiosPost: ${error}`))
    }

    handleEditSave() {
        let { name, price, image_url, } = this.state,
            { id } = this.props.match.params;

        axios
            .put(`/api/coffee`, { id:id, name:name, price:price, image_url:image_url })
            .then(this.setState({ redirect:true }))
            .catch(error => console.log(`Form-axiosPut: ${error}`))
    }

    render() {
        let { name, price, image_url } = this.state;
        return (
            <div className="Form">
                <img className="productImage" src={ image_url } alt="coffee" />
                Image URL:
                <input type="text" value={ image_url } name="image_url" onChange={this.handleChange} />
                Product Name:
                <input type="text" value={ name } name="name" onChange={this.handleChange} />
                Price:
                <input type="text" value={ price } name="price" onChange={this.handleChange} />
                {this.props.match.params.id ? 
				<button onClick={this.handleEditSave}>Save Changes</button>
				:<button onClick={this.handleAdd}>Add Coffee</button>
				}
				<Link to='/'>Cancel</Link>
				{this.state.redirect?<Redirect to='/'/>:<></>}
            </div>
        )
    }
}

export default Form
