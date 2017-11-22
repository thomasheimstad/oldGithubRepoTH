import React from "react";
import Helmet from "react-helmet";
import Fade from '../components/modules/Fade';
import Loader from '../components/modules/Loader';
import Nav from '../components/modules/Nav';
import NavBar from '../components/modules/NavBar';
import ScrollBar from '../components/modules/ScrollBar';
import Footer from '../components/modules/Footer';
import '../css/index.scss';
import config from "../../data/SiteConfig";
let updater = false;
export default class MainLayout extends React.Component {
  state = {
    showNav: false,
    isLoading: true,
    isComplete: false,
  }
  handleClick = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }
  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
    setTimeout(() => this.setState({ isComplete: true }), 1500);
  }
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath === "upcoming/") {
      title = "Upcoming";
    } else if (currentPath.includes("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {this.state.isComplete ? '' : <Fade in={this.state.isLoading} timeout={500}><Loader /></Fade>}
        <NavBar showNav={this.state.showNav} handleClick={this.handleClick} />
        <Nav showNav={this.state.showNav} handleClick={this.handleClick} />
        <ScrollBar />
        <div className={this.state.showNav ? 'overlay' : 'overlayOut'} onClick={this.state.showNav ? this.handleClick : ''}></div>
        <div>
          {children()}
        </div>
        <Footer config={config}/>
      </div>
    )
  }
}
