import React from "react";
import Helmet from "react-helmet";
import Header from "../components/modules/Header";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Upcoming extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="upcoming">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Header title="Upcoming" />
        <PostListing postEdges={postEdges} view="upcomingView" />
      </div>
    );
  }
}

export default Upcoming;
/* eslint no-undef: "off"*/
export const upcomingQuery = graphql`
  query UpcomingQuery {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { category: { eq: "upcoming"} } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            category
            startTime
            location
            thumbnail {
              childImageSharp {
                responsiveSizes(quality: 50, cropFocus: CENTER, toFormat: JPG) {
                  src
                  srcSet
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`;
