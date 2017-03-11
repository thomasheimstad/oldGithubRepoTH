import React from 'react';
import ContactForm from '../components/ContactForm';
export default class Charterfestskjema extends React.Component {
  render = () => {
    return (
      <div class="charterFestSkjema flex column center">
        <div class="col6">
          <ContactForm myEmail='https://formspree.io/rt1bergen@gmail.com' />
        </div>
      </div>
    )
  }
}
