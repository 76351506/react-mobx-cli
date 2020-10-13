/*
 * @Author: heinan 
 * @Date: 2020-10-13 09:17:12 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-10-13 09:29:23
 */

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

class RouterMap extends Component {
  render() {
    const { routes } = this.props;
    const defaultRoute = <Redirect from="/" to="/home" key={'default'} exact ></Redirect>;
    return <Switch>
      {
        routes.map((item, index) => {
          const children = item.children === undefined ? [] : item.children;
          const Comp = item.component;
          return <Route key={item.name} path={item.path} component={() => {
            return <Comp routes={children} {...this.props}></Comp>
          }} />
        }).concat([defaultRoute])
      }

    </Switch>
  }
}

export default RouterMap;
