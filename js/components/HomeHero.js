import React from 'react';
import HomeHeroContent from '../components/HomeHeroContent';
export default class HomeHero extends React.Component {
  render = () => {
    return (
      <div class="homeHero flex" id="homeHero">
        <div class="overcast" style={{ opacity: this.props.percent }}></div>
        <HomeHeroContent lang={this.props.lang}/>
      </div>
    )
  }
}
