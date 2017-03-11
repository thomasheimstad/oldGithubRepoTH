import React from "react";
import MdPhoto from 'react-icons/lib/md/photo-camera';
import FadeInWrapper from '../components/FadeInWrapper';

export default class HomeBullets extends React.Component {
  render = () => {
    return (
      <div class="homeBullets flex spaceAround">
        <FadeInWrapper id="bullet1"><div class="bullet flex center column">
          <a href={this.props.blog}><div class="overcast">
          <MdPhoto />
          <h3>{this.props.lang == "no" ? 'Responsiv design' : 'Responsive design'}</h3>
          <p>{this.props.lang == "no" ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque. Phasellus ligula tellus, vestibulum vel mauris at, feugiat vehicula risus. Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue.' : 'Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc. Proin at magna ultricies, tincidunt nibh id, posuere dui.'}</p>
          </div></a>
        </div></FadeInWrapper>
        <FadeInWrapper id="bullet2"><div class="bullet flex center column">
          <a href={this.props.blog}><div class="overcast">
          <MdPhoto />
          <h3>{this.props.lang == "no" ? 'Responsiv design' : 'Responsive design'}</h3>
          <p>{this.props.lang == "no" ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque. Phasellus ligula tellus, vestibulum vel mauris at, feugiat vehicula risus. Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue.' : 'Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc. Proin at magna ultricies, tincidunt nibh id, posuere dui.'}</p>
          </div></a>
        </div></FadeInWrapper>
        <FadeInWrapper id="bullet3"><div class="bullet flex center column">
          <a href={this.props.blog}><div class="overcast">
          <MdPhoto />
          <h3>{this.props.lang == "no" ? 'Responsiv design' : 'Responsive design'}</h3>
          <p>{this.props.lang == "no" ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque. Phasellus ligula tellus, vestibulum vel mauris at, feugiat vehicula risus. Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue.' : 'Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc. Proin at magna ultricies, tincidunt nibh id, posuere dui.'}</p>
          </div></a>
        </div></FadeInWrapper>
      </div>
    );
  }
}
