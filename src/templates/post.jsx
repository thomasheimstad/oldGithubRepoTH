import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import Header from "../components/modules/Header";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Hero from "../components/modules/Hero";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className="post">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        {/*<Hero id={post.id} src={post.thumbnail.childImageSharp.responsiveSizes.src} headerSize="1.5"/>*/}
        <div className="postContent flex center column">
          <Header title={post.title} />
          <div className="blogPost">
            <Hero id={post.id} src={post.thumbnail.childImageSharp.responsiveSizes.src} headerSize="2"/>
            <div className="basePad">
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              <div className="post-meta">
                <PostTags tags={post.tags} />
                {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
              </div>
            </div>
            {/*<UserInfo config={config} />
            {/* }<Disqus postNode={postNode} /> */}
          </div>
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String! ) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        startTime
        tags
        thumbnail {
          childImageSharp {
            responsiveSizes(maxWidth: 1920, quality: 50, cropFocus: CENTER, toFormat: JPG) {
              src
              srcSet
              sizes
              base64
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
