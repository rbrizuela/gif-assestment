import React, { Component } from 'react'
import './search-Container.css'
import Search from '../components/search'
import GifGrid from '../components/gif-Grid'
import API from '../Api'


class SearchContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      gifList: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async getData(){

    
    console.log('getData (this.state.value): ', this.state.value)

    const data = await API.searchGif(this.state.value)

    console.log('data: ', data)
    
    this.setState({
      gifList: data,
    })
    
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value,'submit')
  }
  
  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {

    event.preventDefault()
    console.log('event.target.value: ', event.target.value)

    this.setState({
      value: event.target.value.replace(' ','-')
    })

    this.getData()

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
        <GifGrid gifList = { this.state.gifList } />
      </div>
      )
  }
}

export default  SearchContainer