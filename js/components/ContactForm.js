import React from 'react';
import ajax from "superagent";
import FaLoad from 'react-icons/lib/fa/spinner';

const gotcha = {
  display: 'none'
};
const myEmail = 'https://formspree.io/me.bot.only@gmail.com';
const errorz = '';
export default class ContactForm extends React.Component {
  state = {
    loading: '',
    finished: '',
    error: '',
    color: '',
  }
  handleChange = () => {
    this.setState({
      color: '#'+Math.floor(Math.random()*16777215).toString(16)
    })
  }
  formSubmit = (e) => {
  e.preventDefault();

  let form = document.getElementById('form')

  let name = this.nameRef.value
  let email = this.emailRef.value
  let message = this.messageRef.value
  let subject = this.subjectRef.value
  let that = this
  ajax
  .post(myEmail, {
    Name: name,
    Email: email,
    Message: message
  })
  .on('progress', function(e) {
      that.setState({
        loading: "show loading",
        finished: '',
        error: '',
      })
   })
  .end(function (err, res) {
    if (err || !res.ok) {
      that.setState({
        loading: '',
        finished: '',
        error: "show error"
      })
      form.reset()
    } else {
      that.setState({
        loading: '',
        finished: 'show finished',
        error: ''
      })
      form.reset()
    }
  })
}
  render = () => {
    let iconStyle = {
      animation: "Rotate 500ms infinite linear"
    }
    let stylez = {
      color: this.state.color
    }
    return (
      <form onSubmit={::this.formSubmit} id="form" class="flex column center">
        <input type="text" placeholder="Name" ref={(input) => this.nameRef = input} onChange={this.handleChange} style={stylez}/>
        <input type="email" placeholder="Email" ref={(input)=> this.emailRef = input} />
        <input type="text" name="_subject" placeholder="Subject" ref={(input) => this.subjectRef = input} />
        <textarea placeholder="Message..." ref={(input) => this.messageRef = input} />
        <input type="text" name="_gotcha" style={gotcha}/>
        <div class="submit flex row">
          <button>Submit</button>
          <div id="successField" class={`${this.state.loading} ${this.state.finished} ${this.state.error} flex center response`}>
          {this.state.loading == "show loading" ? <h3 class="flex center" style={iconStyle}><FaLoad /></h3> : null }
          {this.state.finished == "show finished" ? <h3 class="flex center" ><FaLoad /></h3> : null }
          {this.state.error == "show error" ? <div><h3 class="flex center" ><FaLoad /></h3><h3>{this.errorz}</h3></div> : null }
            </div>
          </div>
      </form>
    )
  }
}
