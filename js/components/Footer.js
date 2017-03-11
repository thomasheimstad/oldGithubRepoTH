import React from "react";
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render = () => {
    return (
      <footer class="footer">
        <div class="col6">
          <h2>ROUND TABLE BERGEN</h2>
          <h3>Round Table er en organisasjon for menn i alderen 20-40 år. Vi er politisk og religiøst uavhengige og ønsker en bred sammensetning av medlemmer på tvers av yrkesgrupper og økonomisk og kulturell bakgrunn.</h3><br/><br/>
          <p>&copy; Copyright 2017 Round Table 1 Bergen</p>
        </div>
        <div class="col2">
          <h2>Naviger</h2>
          <ul class="flex column">
            <Link to="/"><p>Hjem</p></Link>
            <Link to="/charterfest"><p>70-årsjubileum</p></Link>
          </ul>
        </div>
        <div class="col2">
          <h2>Kontakt</h2>
          <ul class="flex column">
            <a href="mailto:sekretær@rt1.no"><p>Email</p></a>
            <a href="https://www.facebook.com/groups/245179519191541/"><p>Facebook</p></a>
          </ul>
        </div>
        <div class="col2">
          <h2>Lenker</h2>
          <ul class="flex column">
            <a href="http://www.roundtable.no"><p>RT Nor</p></a>
            <a href="http://rtinternational.org/"><p>RT Int</p></a>
          </ul>
        </div>
      </footer>
    );
  }
}
