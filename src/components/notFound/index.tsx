import React, { Component } from 'react';
import './notFound.less';
export default class NotFound extends Component<any, any> {
  render() {
    return (
      <div className="notFound">
        <img src={require('assets/img/404.png@2o.png')} alt="404" />
      </div>
    );
  }
}
