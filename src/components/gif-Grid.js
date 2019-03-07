import React, { Component } from 'react'
import GifItem from './gif-Item';

class GifGrid extends Component {

  render() {

    const { gifList } = this.props

    return (
      <div>
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
