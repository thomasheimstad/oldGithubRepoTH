import React from "react";
import HomeHero from '../components/HomeHero';
import HomeIntro from '../components/HomeIntro';
import HomeArticle from '../components/HomeArticle';
import HomeOutro from '../components/HomeOutro';
import AAI from '../components/AAI';
import HomeJoin from '../components/HomeJoin';
import Calendar from '../components/Calendar';
import FadeInWrapper from '../components/FadeInWrapper';

export default class Home extends React.Component {
  state = {
    scrolled: 0,
    percent: 0
  }
  handleScroll = () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 ;
    let percentz = (scroll / document.documentElement.clientHeight);
    this.setState({
      scrolled: scroll,
      percent: percentz
    })
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render = () => {
    return (
      <div class="homeWrap">
        <HomeHero scrolled={this.state.scrolled} percent={this.state.percent} />
        <FadeInWrapper id="HomeArticle">
          <HomeArticle />
        </FadeInWrapper>
        <AAI />
        <FadeInWrapper id="homeJoin">
          <HomeJoin />
        </FadeInWrapper>
      </div>
    );
  }
}
