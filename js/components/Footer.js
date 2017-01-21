import React from "react";
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render = () => {
    return (
      <footer class="footer">
        <div class="col6">
          <img class="footer-logo" src="../img/rtlogo.png"></img>
          <h3>Round Table er en organisasjon for menn i alderen 20-40 år. Vi er politisk og religiøst uavhengige og ønsker en bred sammensetning av medlemmer på tvers av yrkesgrupper og økonomisk og kulturell bakgrunn.</h3><br/><br/>
          <p>&copy; Copyright 2017 Round Table 1 Bergen</p>
        </div>
        <div class="col2">
          <h2>Naviger</h2>
          <ul class="flex column">
            <Link to="/"><p>Hjem</p></Link>
            <Link to="/gallery"><p>Bilder</p></Link>
            <Link to="/archive"><p>Info</p></Link>
          </ul>
        </div>
        <div class="col2">
          <h2>Kontakt</h2>
          <ul class="flex column">
            <a href="#"><p>Email</p></a>
            <a href="#"><p>Facebook</p></a>
            <a href="#"><p>999 88 777</p></a>
          </ul>
        </div>
        <div class="col2">
          <h2>Lenker</h2>
          <ul class="flex column">
            <a href="http://www.roundtable.no"><p>RT Nor</p></a>
            <a href="http://rtinternational.org/"><p>RT Int</p></a>
            <a href="https://en.wikipedia.org/wiki/Round_Table_(club)"><p>RT Wiki</p></a>
          </ul>
        </div>
      </footer>
    );
  }
}
