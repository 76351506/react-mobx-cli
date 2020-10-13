import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('app')
@observer
class Test extends Component {
  render() {
    return <div>
      this is test
      <h1>{this.props.app.count}</h1>
      <button onClick={() => this.props.app.add()}>添加</button>
    </div>
  }
}
export default Test