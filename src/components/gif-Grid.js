import React, { Component } from 'react'
import GifItem from './gif-Item';
import './gif-Grid.css'

class GifGrid extends Component {

  render() {

    const { gifList } = this.props

    return (
      <div className="grid">
        { 
          gifList.map ( item => {
            return <GifItem {...item} key={item.id}/>
          })
        }
      </div>
    )
  }
}

export default GifGrid
