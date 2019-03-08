import React, { Component } from 'react'
import Search from './search';
import './search-Container.css'

class SearchContainer extends Component {
  
  state = {
    value: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value,'submit')
  }
  
  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ','-')
    })
  }

  render() {
    return(   
      <div className="container">
        <Search
          setRef={this.setInputRef}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleInputChange}
          value={this.state.value}
        />
      </div>
      )
  }
}

export default  SearchContainer