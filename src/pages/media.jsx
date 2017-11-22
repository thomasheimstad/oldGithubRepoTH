import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import Hero from "../components/modules/Hero";
import Einar16 from "../images/Einar16.jpg";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Media extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <div className="mediaView">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Hero id="mediaPage" src={Einar16} bgpos="60% 10%" headerSize="1.5"/>
        <PostListing postEdges={postEdges} view="mediaView"/>
      </div>
    );
  }
}

export default Media;
/* eslint no-undef: "off"*/
export const mediaQuery = graphql`
  query UpcomingPages {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "media"} } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            youtubelink
            title
            description
          }
        }
      }
    }
  }
`;
