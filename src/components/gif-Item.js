import React , { Component } from 'react'
import './gif-Item.css'

class GifItem extends Component {
  
	render() {

		return (
			<div className='gif'>
				<img src={this.props.images.original.url} alt="" width={260} height={160}/>
				<h2>{this.props.title}</h2>
			</div>
		)
	}
}

export default GifItem