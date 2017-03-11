import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactSosmed from "../components/ContactSosmed";
import ReactCssTransitionGroup from "react-addons-css-transition-group";
export default class Contact extends React.Component {
  render() {
    return (
        <div class="well clearfix aboutWrapper contactWrapper" key="CONTACT">
          <ReactCssTransitionGroup transitionName="pageTransition" transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={0} transitionLeaveTimeout={0}>
            <ContactInfo />
            <ContactSosmed />
          </ReactCssTransitionGroup>
        </div>
    );
  }
}
