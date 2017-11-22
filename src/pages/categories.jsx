import React from "react";
import Helmet from "react-helmet";
import CategoryListing from "../components/CategoryListing/CategoryListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class CategoriesList extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <CategoryListing postEdges={postEdges} />
      </div>
    );
  }
}

export default CategoriesList;
/* eslint no-undef: "off"*/
export const categoriesQuery = graphql`
  query AllCategories {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___category], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
    }
  }
`;
