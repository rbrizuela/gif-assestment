import React, {Component} from 'react'

class Layout extends Component {

  render() {

    const { children, title } = this.props

    return (
      <div>
        <p>{ title }</p>
        { children }
      </div>
    )
  }
}

export default Layout