import React from 'react';
export default class InfoHero extends React.Component {
  render = () => {
    return (
      <div class="galleryHero clearfix well">
        <div class="center column flex">
          <h1>{this.props.slug}</h1>
          <p>"Yt før du krever"</p>
        </div>
      </div>
    )
  }
}
