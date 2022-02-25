import React from 'react';
import ReactDOM from 'react-dom';
import Mogus from './Info.js'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: 'amogos',
      authorized: false
    }
    this.authorize = this.authorize.bind(this)
  }


  authorize() {
    this.setState({authorized: true});
  }


  render() {
    const button = (<button onClick={this.authorize}>Click</button>)
    return (
      <div>
        <h1>State is: {this.state.authorized ? 'YES' : 'NO LLLLLLLLLL'}</h1>
        {this.state.authorized ? <Mogus /> : button}
      </div>
      
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))
