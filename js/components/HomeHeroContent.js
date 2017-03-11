import React from 'react';
import FaDesktop from 'react-icons/lib/fa/desktop';
export default class HomeHeroContent extends React.Component{
  render = () => {
    return (
      <div class="contentWrap flex">
        <div class="flex center heroContent">
          <div class="flex column center">
            <span><FaDesktop /></span>
            <h1>We make websites</h1>
            <h2>From the ground up with passion and dedication and hard work and inspiration. The devil is in the details, and we offer customer customization.</h2>
            <button><a href="#">See what we got</a></button>
          </div>
          </div>
        <div class="flex center heroImg">
          </div>
      </div>
    )
  }
}
