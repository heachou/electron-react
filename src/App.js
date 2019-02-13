import React, { Component } from 'react'
import {Button} from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{"WebkitAppRegion": "drag"}}>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button type="primary">测试</Button>
      </div>
    );
  }
}

export default App;
