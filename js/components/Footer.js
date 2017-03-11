import React from "react";
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render = () => {
    let footerAboutNo = "Dobbeltgjenger er et amazing bergensband som satster stort";
    let footerAboutEn = "Dobbeltgjenger is an awesome band which continues to amaze the audiences of the world!";
    return (
      <footer class="footer">
        <div class="col6">
          <img class="footer-logo" src="../img/logo.jpg"></img>
          <h3>{this.props.lang === "no" ? footerAboutNo : footerAboutEn}</h3><br/><br/>
          <p>&copy; Copyright 2017 Dobbeltgjenger</p>
        </div>
        <div class="col2">
          <h2>Navigate</h2>
          <ul class="flex column">
            <Link to="/"><p>Hjem</p></Link>
            <a href="#"><p>Calendar</p></a>
            <a href="#"><p>Info</p></a>
          </ul>
        </div>
        <div class="col2">
          <h2>Booking</h2>
          <ul class="flex column">
            <a href="#"><p>Email</p></a>
            <a href="#"><p>Facebook</p></a>
            <a href="#"><p>999 88 777</p></a>
          </ul>
        </div>
        <div class="col2">
          <h2>Listen</h2>
          <ul class="flex column">
            <a href="#"><p>Spotify</p></a>
            <a href="#"><p>iTunes</p></a>
            <a href="#"><p>Youtube</p></a>
          </ul>
        </div>
      </footer>
    );
  }
}
