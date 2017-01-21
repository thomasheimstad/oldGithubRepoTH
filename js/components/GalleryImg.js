import React from 'react';
export default class GalleryImg extends React.Component {
  render = () => {
    let imgUrl = this.props.tnsrc;
    let imgStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    }
    return (
      <div class="col6 galleryImg" style={imgStyle} alt={this.props.alt} >
        <a href={this.props.blog}><div class="overcast overcast2">
          <div class="flex center column">
            <h3>{this.props.title}</h3>
            <p>{this.props.alt}</p>
          </div>
        </div></a>
      </div>
    )
  }
}
