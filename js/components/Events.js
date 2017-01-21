import React from "react";
import ReactDOM from "react-dom";
import MdTime from 'react-icons/lib/md/access-time';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import FadeInWrapper from '../components/FadeInWrapper';
export default class Events extends React.Component{
  state = {
    showAll: false
  };
  /* The following function returns the first 3 upcoming events from your Google Calendar, and filters out the finished events.
     The switch deals with two cases, where the second one, true, returns ALL the next calendar events.*/
  reduceTo3events = (e) => {
    let temp = [];
    for(let i of e.events)
    i && temp.push(i);
    e.events = temp;
    switch(this.state.showAll) {
      case false: return [temp[0], temp[1], temp[2]];
      case true: return [...temp];
    }
  }
  /* Event handler for the button. It toggles the state between false and true, which will reveal either 3 or ALL your Google calendar events. */
  handleClick = () => {
    /* Sets the state to the opposite of the previous state. Basically toggles between true and false.  */
      this.setState({showAll: !this.state.showAll});
    }
  render = () => {
    let buttonText = this.state.showAll ? "See less events" : "See more events";
    /* The following .map method returns some of the object parameters from the Google Calendar Event, which is retrieved thorugh an Ajax call
       in the Calendar component. Now, it returns the data in a presentable manner, which makes css styling a breeze. The .map method retrieves the parameters
       for all the Calendar Events. */

    /* this.props.savedState fetches the saved return from the Ajax call in the Calendar component. */
    let events = (this.props.savedState || []).map((item, index) => {
      /* If the events' start time is later than today, it will return the events */
      if(item.start.dateTime.slice(0,10) > new Date().toJSON().slice(0,10) ) {
      let summary = item.summary;
      let id = item.id;
      let description = item.description;
      let location = item.location;
      let start = item.start.dateTime;
      let number = [...start];
        return (
          <div class="eventsContainer" key={index}>
          <FadeInWrapper id={id} buttonClicked={this.state.showAll}>
              <ul class="timeContainer">
                <li class="date">{number[8]}{number[9]}.{number[5]}{number[6]}.{number[2]}{number[3]}</li>
                <li class="time"><MdTime/>{number[11]}{number[12]}{number[13]}{number[14]}{number[15]}</li>
                <li class="location">{location}</li>
              </ul>
              <ul class="textContainer">
                <li class="summary"><h2>{summary}</h2></li>
                <li class="description">{description}</li>
                </ul>
                </FadeInWrapper>
            </div>
          )
        }}
      )
    /* Using the ReactCSSTransitionGroup to create some simple transitions between the two states (true/false). See the css file for the styling
       for these transitions. Beware: when choosing a transition time in the css file which is longer than the "transitionEnterTimeout",
       the "transitionEnterTimeout"s number will cancel the css' number. In this case, it's set to 500ms. I added "transitionLeaveTimeout" only because
       the console threw a warning.

       The function this.reduceTo3events() returns the total number of events retrieved from the .map, and enables a toggle between states.

       The buttons onClick method calls the handleClick function, which toggles between states. */

    return (
      <div>
      <ReactCSSTransitionGroup transitionName="calendarEvent" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        {this.reduceTo3events({events})}
      </ReactCSSTransitionGroup>
      <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}
