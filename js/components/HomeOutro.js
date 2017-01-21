import React from 'react';
import FadeInWrapper from '../components/FadeInWrapper';
import HomeOutroImg from '../components/HomeOutroImg';
import ContactInfo from '../components/ContactInfo';
import Sosmed from '../components/Sosmed';

export default class HomeOutro extends React.Component {
  render = () => {
    return (
      <div class="homeOutro">
        <ContactInfo id="homeOutroContactInfo" />
        <HomeOutroImg id="homeOutroImg" />
        <Sosmed id="homeOutroSosmed" />
      </div>
    );
  }
}
