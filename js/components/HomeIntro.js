import React from 'react';
import HomeIntroWelcome from '../components/HomeIntroWelcome';
import HomeIntroImg from '../components/HomeIntroImg';

export default class HomeIntro extends React.Component {
  render = () => {
    return (
      <div class="homeIntro" id="welcome" >
        <HomeIntroWelcome />
        <HomeIntroImg  />
      </div>
    )
  }
}
