// React modules
import React, { Component } from 'react';

import { Link } from 'react-router';

import './styles/style.scss';

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        <p>Sorry the page you are looking for doesn't exist.</p>
        <Link to="/" className="back-to-page">Back To Home</Link>
      </div>
    );
  }
}

export default PageNotFound;
