import { Component } from 'react';
import Router from 'next/router';

export default class extends Component {
  static async getInitialProps({ res }) {
    const url = '/settings/store';
    if (res) {
      res.writeHead(302, {
        Location: url
      });
      res.end();
    } else {
      Router.push(url);
    }

    return {};
  }
}
