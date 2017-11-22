import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import Hero from "../components/modules/Hero";
import Einar6 from "../images/Einar6.jpg";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="about flex center column">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero id="aboutPage" src={Einar6} bgpos="50% 20%" headerSize="1.5"/>
        <About />
      </div>
    );
  }
}
export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default AboutPage;
