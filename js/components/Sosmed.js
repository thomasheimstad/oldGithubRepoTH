import React from 'react';
import FadeInWrapper from '../components/FadeInWrapper';
import FaFace from 'react-icons/lib/fa/facebook-official';
import Insta from 'react-icons/lib/fa/instagram';
export default class Sosmed extends React.Component {
  render = () => {
    return (
      <div class="col4">
      <FadeInWrapper id={this.props.id}>
        <div class="flex column center homeOutroSosmed">
          <h2>FACEBOOK</h2>
          <h3><a href="https://www.facebook.com/groups/245179519191541/"><FaFace /></a></h3>
          </div>
      </FadeInWrapper>
      </div>
    )
  }
}
