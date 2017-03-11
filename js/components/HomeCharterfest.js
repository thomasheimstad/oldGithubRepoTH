import React from 'react';
import { Link } from 'react-router';
import GalleryImg from '../components/GalleryImg';

export default class HomeCharterfest extends React.Component {
  render = () => {
    return (
      <div class="charterfest imageGallery flex" id="HomeCharterfest"><Link to="/charterfest">
        <GalleryImg tnsrc="/img/tn/Bergen%20sideways.jpg" src="/img/Bergen%20sideways.jpg" title="70-års jubileum"><p>&</p><h3>RT/LC - Ledermøte</h3></GalleryImg>
        <GalleryImg alt="Vi ønsker herved tablere og mumier velkommen til en historisk aften i RT hovedstaden Bergen. Der er begrenset med plasser - de første 100 er allerede påmeldt!"><button>Meld deg på</button></GalleryImg>
        </Link>
      </div>
    );
  }
}
