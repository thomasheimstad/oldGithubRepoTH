import React, {Component, Children, PropTypes } from 'react';
export default class GalleryImages extends React.Component {
  state = {
    counter: Children.count(this.props.children)
  }
  render = () => {
    let count = Children.count(this.props.children);
    return (
      <div class="row">
        {this.props.children}
      </div>
      )
    }
  }
