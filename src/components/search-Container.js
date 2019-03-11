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
    this.handleChange = this.handleChange.bind(this);
  }

  async getData(query){

    
    console.log('getData (this.state.value): ', this.state.value)

    const data = await API.searchGif(query)

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

  handleChange = event => {

    console.log('event.target.value: ', event.target.value)

    this.setState({
      value: event.target.value.replace(' ','-')
    })

    this.getData(event.target.value)

  }

  render() {
    return(   
      <div className="container">
        <Search
          setRef={this.setInputRef}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <GifGrid gifList = { this.state.gifList } />
      </div>
      )
  }
}

export default  SearchContainer