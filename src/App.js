import React, { Component } from 'react';
import Layout from './components/layout'
import SearchContainer from './components/search-Container.js';

class App extends Component {

  render() {
    return (
      <Layout title="">
        <SearchContainer/>
      </Layout>
    )
  }
}

export default App;
