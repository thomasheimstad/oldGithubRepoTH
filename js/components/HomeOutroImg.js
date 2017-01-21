import React from 'react';
import FadeInWrapper from '../components/FadeInWrapper';
import graph from 'fb-react-sdk';
export default class HomeOutroImg extends React.Component {
  render = () => {
    return (
      <div class="col4">
      <FadeInWrapper id={this.props.id}>
        <div class="homeOutroImg"></div>
      </FadeInWrapper>
      </div>
    )
  }
}
