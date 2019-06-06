import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }

        this.deleteOne = this.deleteOne.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
        axios
        .get('/api/coffee')
        .then(response => this.setState({ products: response.data }))
        .catch(error => console.log(`Dashboard-axiosGet: ${error}`))
        }, 1000)
    }


    deleteOne(id) {
        axios
            .delete(`/api/coffee/${id}`)
            .then(() => this.componentDidMount())
            .catch(error => console.log(`Dashboard-axiosDelete: ${error}`))
    }

    render() {
    let { products } = this.state
    let displayProducts = products.map(coffee => {
        return (
            <Product 
            key={coffee.coffee_id}
            id={coffee.coffee_id}
            name={coffee.name}
            price={coffee.price}
            image={coffee.image_url}
            deleteOneFn={this.deleteOne}
            />
        )
    })
        return (
            <div className='Dashboard'>
                { displayProducts }
            </div>
        )
    }
}

export default Dashboard
