import React from 'react';
import GalleryImg from '../components/GalleryImg';
import GalleryImages from '../components/GalleryImages';
export default class ImageGallery extends React.Component {
  render = () => {
    return (
      <div class="imageGallery">
        <GalleryImages>
          <GalleryImg tnsrc="/img/tn/sundown.jpg" src="/img/sundown.jpg" alt="Event 1" title="Tur til oljeplattform" />
          <GalleryImg tnsrc="/img/tn/pinecone.jpg" src="/img/pinecone.jpg" alt="Event 2"title="Ut i skogen" />
          <GalleryImg tnsrc="/img/tn/boat.jpg"src="/img/boat.jpg" alt="Event 3" title="Båttur på vannet" />
          <GalleryImg tnsrc="/img/tn/pinecone3.jpg"src="/img/pinecone3.jpg" alt="Event 4" title="En kongetur" />
        </GalleryImages>
      </div>
    )
  }
}
