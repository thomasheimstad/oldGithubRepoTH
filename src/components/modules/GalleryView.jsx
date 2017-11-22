import React from 'react';
import Link from 'gatsby-link';
import FadeInWrapper from './FadeInWrapper';
import PostTags from '../PostTags/PostTags';
import IconCalendar from "react-icons/lib/fa/calendar";
import IconArrowDown from "react-icons/lib/fa/angle-down";
export default class GalleryView extends React.Component {
  state={
    showCardContent: false,
    windowWidth: '',
    rotater: false
  }
  checkH5content = (category,timeToRead,startTime,title) => {

    if(category == "blog") {
      return (
        <h5>{timeToRead} min read</h5>
      )
    } else if(category == "upcoming"){
      return (
        <h5>{startTime ? startTime : title }</h5>
      )
    } else {
      return (
        <h5>{title}</h5>
      )
    }
  }
  onClickHandler = () => {
    this.setState({
      showCardContent: !this.state.showCardContent,
      rotater: !this.state.rotater,
    })
  }
  onWindowResize = () => {
    this.setState({
      windowWidth: document.documentElement.clientWidth
    })
    this.checkWindowWidth();
  }
  checkWindowWidth = () => {
    this.state.windowWidth < 600 ?this.setState({showCardContent: false}) : this.setState({showCardContent: true})
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.onWindowResize);
    this.setState({
      windowWidth: document.documentElement.clientWidth,
    })
    this.checkWindowWidth();
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onWindowResize);
  }
  render = () => {
    return (
    <FadeInWrapper id={this.props.title} >
      <div className="postCard">
        <Link to={this.props.path} key={this.props.title}>
        <header style={{ backgroundImage: `url("${this.props.src}")` }}>
          <div>
            <div className="flex center">
              <h3>
                {this.props.title}
              </h3>
            </div>
          </div>
        </header>
        </Link>
        <div className="flex postCardTitle">
          <div className="flex center iconWrapper noPointer"><IconCalendar className="reactIcon"/></div>
          <div className="flex column"><h5>{this.props.date ? this.props.date : this.props.title}</h5>
            {this.checkH5content(this.props.category, this.props.timeToRead, this.props.startTime, this.props.title)}
          </div>
          {this.state.windowWidth < 600 ? <div onClick={this.onClickHandler} className="iconWrapper flex center noBackground"><IconArrowDown className={"reactIcon "  + (this.state.rotater ? 'rotateTo' : 'rotateBack')}/></div> : ''}
        </div>
        <div className={'flex postCardContent center column ' + (this.state.showCardContent ? 'showCards' : 'hideCards')}>
          <div><p>{this.props.excerpt ? this.props.excerpt : this.props.title}</p></div>
          {/*<div className="flex center row wrap">{this.props.tags ? this.props.tags.map(x=>{return <Link key={x} to={"tags/" + x.replace(" ", "-")}>{x}</Link>}) : 'failed'}
        </div> */}
        <PostTags tags={this.props.tags} />
      </div>
    </div>
  </FadeInWrapper>
  )
}
}
