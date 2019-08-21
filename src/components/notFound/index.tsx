import React, { Component } from 'react';
import { history } from 'utils';
import './notFound.less';
export default class NotFound extends Component<any, any> {
  goBack = () => {
    history.push('/home');
  };
  render() {
    return (
      <div className="notFound" onClick={() => this.goBack()}>
        <img src={require('assets/img/404.png@2o.png')} alt="404" />
      </div>
    );
  }
}
