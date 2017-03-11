import React from 'react';
import GalleryImg from '../components/GalleryImg';
import GalleryImages from '../components/GalleryImages';
export default class ImageGallery extends React.Component {
  render = () => {
    return (
      <div class="well clearfix galleryWrap">
        <div class="imageGallery">
          <GalleryImages>
            <GalleryImg tnsrc="/img/tn/sundown.jpg" src="/img/sundown.jpg" title={
              this.props.lang == "no" ? 'Konsert på Hulen 2016' : 'Concert at Hulen 2016'} alt={
              this.props.lang == "no" ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque. Phasellus ligula tellus, vestibulum vel mauris at, feugiat vehicula risus. Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc.' : 'Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc. Proin at magna ultricies, tincidunt nibh id, posuere dui. Fusce odio orci, venenatis ullamcorper mauris eu, posuere accumsan diam.'} />
            <GalleryImg tnsrc="/img/tn/pinecone.jpg" src="/img/pinecone.jpg" title={
              this.props.lang == "no" ? 'Urørtfinalen 2017' : 'Finals at Urørt 2017'} alt={
              this.props.lang == "no" ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque. Phasellus ligula tellus, vestibulum vel mauris at, feugiat vehicula risus. Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc.' : 'Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc. Proin at magna ultricies, tincidunt nibh id, posuere dui. Fusce odio orci, venenatis ullamcorper mauris eu, posuere accumsan diam.'}  />
            <GalleryImg tnsrc="/img/tn/boat.jpg"src="/img/boat.jpg" title={
              this.props.lang == "no" ? 'Oppvarming for QOTSA 2017' : 'Wormup for QOTSA 2017'} alt={
              this.props.lang == "no" ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque. Phasellus ligula tellus, vestibulum vel mauris at, feugiat vehicula risus. Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc.' : 'Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc. Proin at magna ultricies, tincidunt nibh id, posuere dui. Fusce odio orci, venenatis ullamcorper mauris eu, posuere accumsan diam.'}  />
            <GalleryImg tnsrc="/img/tn/pinecone3.jpg"src="/img/pinecone3.jpg" title={
              this.props.lang == "no" ? 'Headliner på Roskilde 2018' : 'Headlining Roskilde 2017'} alt={
              this.props.lang == "no" ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque. Phasellus ligula tellus, vestibulum vel mauris at, feugiat vehicula risus. Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc.' : 'Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio. Integer sit amet elit congue, iaculis magna vel, commodo ligula. Donec ut ullamcorper arcu. Donec quis semper ex, at semper nunc. Proin at magna ultricies, tincidunt nibh id, posuere dui. Fusce odio orci, venenatis ullamcorper mauris eu, posuere accumsan diam.'}  />
          </GalleryImages>
        </div>
      </div>
    )
  }
}
