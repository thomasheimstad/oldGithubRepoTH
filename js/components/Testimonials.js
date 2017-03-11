import React, {Component, Children, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class Testimonials extends React.Component {
  render = () => {
    return (
      <div class="col9">
        {this.props.children}
      </div>
      )
    }
  }
