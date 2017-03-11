import React from 'react';
import ajax from "superagent";
import FaLoad from 'react-icons/lib/fa/spinner';
import MdAnnouncement from 'react-icons/lib/md/announcement';
import MdDone from 'react-icons/lib/md/done';

const gotcha = {
  display: 'none'
};
export default class ContactForm extends React.Component {
  state = {
    loading: '',
    finished: '',
    error: ''
  }
  formSubmit = (e) => {
    const myEmail = this.props.myEmail;
    e.preventDefault();
    let form = document.getElementById('form')

    let name = this.nameRef.value
    let email = this.emailRef.value
    let antall = this.antallRef.value
    let message = this.messageRef.value
    let subject = this.subjectRef.value
    let that = this
    ajax
    .post(myEmail, {
      Name: name,
      Email: email,
      Antall: antall,
      Message: message
    })
    .on('progress', function(e) {
        that.setState({
          loading: "show loading",
          finished: '',
          error: '',
        })
     })
    .then(function (success, failure) {
      if (success) {
        that.setState({
          loading: '',
          finished: "show finished",
          error: '',
        })
        form.reset()
      } else {
        let errorz = err;
        that.setState({
          loading: '',
          finished: '',
          error: "show error",
        })
        form.reset()
      }
    })
  }
  render = () => {
    let iconStyle = {
      animation: "Rotate 500ms infinite linear"
    }
    return (
      <form onSubmit={::this.formSubmit} id="form">
        <div class="formInput">
          <input type="text" placeholder="Navn" ref={(input) => this.nameRef = input} />
          </div>
        <div class="formInput">
          <input type="email" placeholder="Epost" ref={(input)=> this.emailRef = input} />
          </div>
          <div class="formInput">
            <input type="number" placeholder="Antall" ref={(input)=> this.antallRef = input} />
            </div>
        <div class="formInput">
          <textarea placeholder="Melding" ref={(input) => this.messageRef = input} />
          </div>
        <input type="text" name="_subject" type="hidden" ref={(input) => this.subjectRef = input} />
        <input type="text" name="_gotcha" style={gotcha}/>
        <div class="formInput flex row">
          <button>Submit</button>
          <div id="successField" class={`${this.state.loading} ${this.state.finished} ${this.state.error} flex center response`}>
          {this.state.loading == "show loading" ? <h3 class="flex center" style={iconStyle}><FaLoad /></h3> : null }
          {this.state.finished == "show finished" ? <h3 class="flex center" ><MdDone /></h3> : null }
          {this.state.error == "show error" ? <div><h3 class="flex center" ><MdAnnouncement />{this.errorz}</h3></div> : null }
            </div>
          </div>
      </form>
    )
  }
}
