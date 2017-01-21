import React from 'react';
import FadeInWrapper from '../components/FadeInWrapper';
import InfoHero from '../components/InfoHero';
import AAI from '../components/AAI';
import InfoArticle from '../components/InfoArticle';

export default class Info extends React.Component {
  render = () => {
    return (
      <div class="well clearfix secondWrap squares">
        <InfoHero />
        <FadeInWrapper id="InfoAAI">
          <AAI />
        </FadeInWrapper>
        <FadeInWrapper id="InfoArticle">
          <InfoArticle />
        </FadeInWrapper>
      </div>
    )
  }
}
