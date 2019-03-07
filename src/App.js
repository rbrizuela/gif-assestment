import React, { Component } from 'react';
import API from './Api.js'
import Layout from './components/layout'
import GifGrid from './components/gif-Grid'


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
        <GifGrid gifList = { this.state.gifList } />
      </Layout>
    )
  }
}

export default App;
