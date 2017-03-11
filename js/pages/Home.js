import React from "react";
// require scss to load inline load above the fold
require('../../css/3-sections/_homeHero.scss');
import HomeHero from '../components/HomeHero';
import HomeBullets from '../components/HomeBullets';
import HomeQuotes from '../components/HomeQuotes';
import HomeTestimonials from '../components/HomeTestimonials';
import TimeCalc from '../components/TimeCalc';
import FadeInWrapper from '../components/FadeInWrapper';

export default class Home extends React.Component {
  state = {
    scrolled: 0,
    percent: 0,
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 ;
    let percentz = (scroll / document.documentElement.clientHeight);
    this.setState({
      scrolled: scroll,
      percent: percentz
    })
  }
  render = () => {
    return (
      <div class="homeWrap flex column">
        <TimeCalc />
        <HomeHero scrolled={this.state.scrolled} percent={this.state.percent} lang={this.props.lang} />
        <HomeBullets lang={this.props.lang}/>
        <HomeQuotes />
        <HomeTestimonials />
      </div>
    );
  }
}
