import React, { Component } from 'react';
import API from './Api.js'
import Layout from './components/layout'
import GifGrid from './components/gif-Grid'
import SearchContainer from './components/search-Container.js';


class App extends Component {

  state = {
    gifList: [],
  }

  async componentDidMount(){
    const data = await API.searchGif()

    console.log(data)
    
    this.setState({
      gifList: data,
    })

  }

  render() {
    return (
       <Layout title="gif assestment">
        <SearchContainer/>
        <GifGrid gifList = { this.state.gifList } />
      </Layout>
    )
  }
}

export default App;
