import React from "react";
import Link from 'gatsby-link'
import GalleryView from '../../components/modules/GalleryView';
import FadeInWrapper from "../../components/modules/FadeInWrapper";

class PostListing extends React.Component {
  state={
    view: this.props.view
  }
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        category: postEdge.node.frontmatter.category,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        youtubelink: postEdge.node.frontmatter.youtubelink,
        description: postEdge.node.frontmatter.description,
        startTime: postEdge.node.frontmatter.startTime,
        location: postEdge.node.frontmatter.location
      });
    });
    return postList;
  }
  render() {
    let defaultPostList = (...props) => {
      return (
        <div className="flex center">
          <p>
            {props[0]} <br/>
            {props[1]}
          </p>
        </div>
      )
    }
    let mediaPostList = (...props) => {
      return (
        <FadeInWrapper id={props[0]} >
          <div className="flex column videoCard">
            <div className="basePad">
              <h2>{props[0]}</h2>
              <h3>{props[2]}</h3>
            </div>
            <div className="videoWrapper">
              <iframe width="560" height="349" src={props[1]} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </FadeInWrapper>
      )
    }
    let upcomingList = (...props) => {
      return (
        <FadeInWrapper id={props[0]}>
          <Link to={props[6]}>
          <h2>{props[2]}</h2>
          <h3>{props[0]}</h3>
          <h4>{props[3] ? props[3] : 'TBA'}</h4>
          <h4>{props[5]}</h4>
        </Link>
        </FadeInWrapper>
      )
    }
    let checkView = (props) => {
      if (this.state.view == "galleryView") {
      return(<GalleryView src = {props.thumbnail.childImageSharp.responsiveSizes.src} title = {props.title} date = {props.date} excerpt = {props.excerpt} tags = {props.tags} path = {props.path} timeToRead = {props.timeToRead} category = {props.category} startTime={props.startTime}/>)
    } else if (this.state.view == "mediaView") {
        return(mediaPostList(props.title, props.youtubelink, props.description))
      } else if (this.state.view == "upcomingView") {
        return(upcomingList(props.title, props.description, props.date, props.startTime, props.tags, props.location, props.path))
      } else { return(defaultPostList(props.title, props.date)) }
    }

    const postList = this.getPostList();
    return (
      <div className={`${this.state.view} basePad`} >
        {/* Your post list here. */
        postList.map(post =>
          <div key={post.title}>
              {/* {post.thumbnail.childImageSharp.responsiveSizes.src.length > 0 ? <img src={post.thumbnail.childImageSharp.responsiveSizes.src} data-src={post.thumbnail.childImageSharp.responsiveSizes.src} data-srcset={post.thumbnail.childImageSharp.responsiveSizes.srcSet} data-sizes={post.thumbnail.childImageSharp.responsiveSizes.sizes} className="lazyload" alt={post.title}/> : ''} */}
              {/* Chech for returned thumbnail image. Return header  */}
              {checkView(post)}
          </div>
        )}
      </div>
    );
  }
}

export default PostListing;
