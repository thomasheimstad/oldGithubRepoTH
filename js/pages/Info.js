import React from 'react';
import FadeInWrapper from '../components/FadeInWrapper';
import InfoHero from '../components/InfoHero';
import AAI from '../components/AAI';

export default class Info extends React.Component {
  state = {
    slug: ''
  }
  componentDidMount = () => {
    this.setState({
      slug: window.location.href.substr(window.location.href.lastIndexOf("/")+1)
    })
  }
  componentWillReceiveProps = () => {
    this.setState({
      slug: window.location.href.substr(window.location.href.lastIndexOf("/")+1)
    })
  }
  render = () => {
    return (
      <div class="well clearfix secondWrap squares">
        <InfoHero slug={this.state.slug}/>
          {this.props.children}
        <FadeInWrapper id="InfoAAI">
          <AAI />
        </FadeInWrapper>
      </div>
    )
  }
}
