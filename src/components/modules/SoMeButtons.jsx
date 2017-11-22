import React, {Component} from 'react';
import { FaFacebook, FaEnvelope, FaPhone, FaYoutube } from 'react-icons/lib/fa/';
export default class SoMeButtons extends Component {
  state = {
    iconSize: '',
  }
  handleResize = () => {
    let d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = window.innerWidth || e.clientWidth || g.clientWidth,
    y = window.innerHeight|| e.clientHeight|| g.clientHeight;
    let iconSize = '';
    x < 600 ? iconSize = 28 : iconSize = 26;
    this.setState({
      iconSize: iconSize
    })
  }
  componentDidMount = () => {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    const {config} = this.props;
    const url = config.siteUrl;
    const title = config.siteTitle;

    return (
      <ul className="flex center">
        <li><FaEnvelope size={this.state.iconSize}/></li>
        <li><FaPhone size={this.state.iconSize}/></li>
        <li><FaFacebook size={this.state.iconSize}/></li>
        <li><FaYoutube size={this.state.iconSize}/></li>
      </ul>
    )
  }
}
