import React from 'react';
import ReactDOM from 'react-dom';
import GalleryIntro from '../components/GalleryIntro';
import ImageGallery from '../components/ImageGallery';
export default class Gallery extends React.Component{
  render = () => {
    return (
      <div class="well clearfix galleryWrap">
        <GalleryIntro />
        <ImageGallery />
      </div>
    )
  }
}
