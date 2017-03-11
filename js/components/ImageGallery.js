import React from 'react';
import GalleryImg from '../components/GalleryImg';
import GalleryImages from '../components/GalleryImages';
export default class ImageGallery extends React.Component {
  render = () => {
    return (
      <div class="imageGallery">
        <GalleryImages>
          <GalleryImg tnsrc="/img/tn/Bergen%20BlackWhiteColour.jpg" src="/img/Bergen%20BlackWhiteColour.jpg" title="Tidspunkt" alt="Hold av 1. til 3. september 2017. Da braker det løs i Bergen. " />
          <GalleryImg tnsrc="/img/tn/greengray.jpg" src="/img/greengray.jpg" title="Timeplan" alt="Oppdateres fortløpende. Følg med på nettsiden." />
        </GalleryImages>
      </div>
    )
  }
}
