/*
 * @Author: heinan 
 * @Date: 2020-09-09 09:32:42 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-10-13 09:27:41
 */
import React from 'react';
import RouterMap from './map';
import Routes from './routes';

const RouterView = function (props) {
  const routes = props.routes ? props.routes : Routes;
  return <RouterMap routes={routes}></RouterMap>
}
export default RouterView;