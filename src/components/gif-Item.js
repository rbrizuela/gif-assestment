import React , { Component } from 'react'
 
class GifItem extends Component {
  
	render() {

		return (
			<div>
				<img src={this.props.images.original.url} alt="" width={260} height={160}/>
				<h3>{this.props.id}</h3>
			</div>
		)
	}
}

export default GifItem