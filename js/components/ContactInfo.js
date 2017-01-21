import React from "react";
import FadeInWrapper from '../components/FadeInWrapper';

export default class ContactInfo extends React.Component {

  render() {
    return (
      <div class="col4">
      <FadeInWrapper id={this.props.id}>
        <div class="flex column center contactInfo">
          <h2>KONTAKT</h2>
          <h3><a href="#">lorem.ipsum@gmail.com</a></h3>
          </div>
        </FadeInWrapper>
      </div>
    );
  }
}
