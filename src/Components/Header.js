import React from 'react'
import shelfieIcon from '../assets/shelfie_icon.png'
import { Link } from 'react-router-dom'

const Header = () => {
        return (
        <div className="Header">
			<img src={shelfieIcon} alt="shelfie logo" />
			<h2 className="title">SHELFIE</h2>
			<Link to='/'>Dashboard</Link>
			<Link to='/form'>Add Inventory</Link>
		</div>  
        )

}

export default Header
