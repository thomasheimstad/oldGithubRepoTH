import React from "react";
require('../../css/3-sections/_homeHero.scss');
import HomeHero from '../components/HomeHero';
import HomeArticle from '../components/HomeArticle';
import HomeJoin from '../components/HomeJoin';
import HomeCharterfest from '../components/HomeCharterfest';
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
    window.onbeforeunload = 0;
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.onbeforeunload = 0;
  }
  render = () => {
    return (
      <div class="homeWrap flex column">
        <HomeHero scrolled={this.state.scrolled} percent={this.state.percent} />
        <FadeInWrapper id="HomeArticle">
          <HomeArticle />
        </FadeInWrapper>
        <FadeInWrapper id="HomeCharterfest">
          <HomeCharterfest />
        </FadeInWrapper>
        <FadeInWrapper id="HomeJoin">
          <HomeJoin />
        </FadeInWrapper>
      </div>
    );
  }
}
