import React from 'react';
import MdCheck from 'react-icons/lib/md/check-circle';
import MdPublic from 'react-icons/lib/md/public';
import MdBuild from 'react-icons/lib/md/build';
import FadeInWrapper from '../components/FadeInWrapper';
export default class Adopt extends React.Component {
  render = () => {
    return (
      <div class="adimp flex center column adopt" onMouseEnter={this.props.handleHoverIn} onMouseLeave={this.props.handleHoverOut}>
        <MdCheck />
        <h2>Adopt</h2>
        <p>Tablers adopt the situation that is given and methods that have proved so sound in the past.</p>
      </div>
    )
  }
}
export default class Adapt extends React.Component {
  render = () => {
    return (
      <div class="adimp flex center column adapt" onMouseEnter={this.props.handleHoverIn2} onMouseLeave={this.props.handleHoverOut2} >
        <MdPublic />
        <h2>Adapt</h2>
        <p>Tablers adapt the situation to the changing needs of the time, together and in collaboration. </p>
      </div>
    )
  }
}
export default class Improve extends React.Component {
  render = () => {
    return (
      <div class="adimp flex center column improve" onMouseEnter={this.props.handleHoverIn3} onMouseLeave={this.props.handleHoverOut3}>
        <MdBuild />
        <h2>Improve</h2>
        <p>Wherever possible, Tablers improve the situation, them selves and people around them.</p>
      </div>
    )
  }
}
export default class AAI extends React.Component {
  render = () => {
    return (
      <div class="AAI flex spaceAround center">
        <FadeInWrapper id="adopt">
          <Adopt />
        </FadeInWrapper>
        <FadeInWrapper id="adapt">
          <Adapt />
        </FadeInWrapper>
        <FadeInWrapper id="improve">
          <Improve />
        </FadeInWrapper>
      </div>
    )
  }
}
