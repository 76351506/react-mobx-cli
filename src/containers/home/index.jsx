import React, { Component } from 'react';
import { _getData } from '@/api/app';

class Home extends Component {
  componentDidMount() {
    this.getData()
  }
  async getData() {
    const result = await _getData();
    console.log(result)
  }
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
export default Home