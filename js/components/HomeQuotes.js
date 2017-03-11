import React from 'react';
import FadeInWrapper from '../components/FadeInWrapper';
import QuoteBullets from '../components/QuoteBullets';
import ContactForm from '../components/ContactForm';
export default class HomeQuotes extends React.Component {
  render = () => {
    return (
      <div class="homeQuotes flex row center">
        <FadeInWrapper id="quoteBullets"><QuoteBullets /></FadeInWrapper>
        <FadeInWrapper id="quoteQuote"><ContactForm /></FadeInWrapper>
      </div>
    )
  }
}
