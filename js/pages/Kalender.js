import React from 'react';
import FadeInWrapper from '../components/FadeInWrapper';
import KalenderHero from '../components/KalenderHero';
import Calendar from '../components/Calendar';

export default class Kalender extends React.Component {
  render = () => {
    return (
      <div class="well clearfix secondWrap squares">
        <KalenderHero />
        <Calendar />
      </div>
    )
  }
}
