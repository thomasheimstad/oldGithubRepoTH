import React from 'react';
import { Link } from 'react-router';
import MdCheck from 'react-icons/lib/md/check-circle';
import MdPublic from 'react-icons/lib/md/public';
import MdBuild from 'react-icons/lib/md/build';
import FadeInWrapper from '../components/FadeInWrapper';
export default class Adopt extends React.Component {
  render = () => {
    return (
      <Link to="/info/adopt">
      <div class="adimp flex center column adopt">
        <MdCheck />
        <h2>Adopt</h2>
        <p>Tablers adopt the situation that is given and methods that have proved so sound in the past.</p>
      </div>
      </Link>
    )
  }
}
export default class Adapt extends React.Component {
  render = () => {
    return (
      <Link to="/info/adapt" >
      <div class="adimp flex center column adapt">
        <MdPublic />
        <h2>Adapt</h2>
        <p>Tablers adapt the situation to the changing needs of the time, together and in collaboration. </p>
      </div>
      </Link>

    )
  }
}
export default class Improve extends React.Component {
  render = () => {
    return (
      <Link to="/info/improve">
      <div class="adimp flex center column improve">
        <MdBuild />
        <h2>Improve</h2>
        <p>Wherever possible, Tablers improve the situation, them selves and people around them.</p>
      </div>
      </Link>
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
