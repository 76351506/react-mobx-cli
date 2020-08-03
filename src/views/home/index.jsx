import React, { Component } from 'react'
import RouterView from '@/router/index.js';

export default class componentName extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div>
        this is home pgae
        <RouterView routes={routes}></RouterView>
      </div>
    )
  }
}
