import React from 'react';
import ReactDOM from 'react-dom';
import GalleryHero from '../components/GalleryHero';
import ImageGallery from '../components/ImageGallery';
import Charterfestskjema from '../components/Charterfestskjema';
import FadeInWrapper from '../components/FadeInWrapper';
export default class Charterfest extends React.Component{
  render = () => {
    return (
      <div class="galleryWrap flex column col12">
        <FadeInWrapper id="galleryHero"><GalleryHero /></FadeInWrapper>
        <FadeInWrapper id="imageGallery"><ImageGallery /></FadeInWrapper>
        <FadeInWrapper id="charterFestSkjema"><Charterfestskjema /></FadeInWrapper>
      </div>
    )
  }
}
