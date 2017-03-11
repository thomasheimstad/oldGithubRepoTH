import React from 'react';
import Testimonials from '../components/Testimonials';
import Testimonial from '../components/Testimonial';
let count = 0;
export default class HomeTestimonials extends React.Component {
  state = {
    testimonial: count,
    quotes: [
      {key:"11", id:"number1", name:"Testing J. Christopher Jr.", position:"CEO of UpsAndDowns", title:"A great project",   copy:"This is such a good site.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque. Phasellus ligula tellus, vestibulum vel mauris at, feugiat vehicula risus. Nulla arcu sapien, sollicitudin nec faucibus in, congue sed odio.", src:"img/pinecone2.jpg"},
      {key:"22", id:"number2", name:"Test2", position:"CEO of UpsAndDowns", title:"2A great project",  copy:"This is such a good site", src:"img/pinecone2.jpg"},
      {key:"33", id:"number3", name:"Test3", title:"3A great project",  copy:"This is such a good site", src:"img/pinecone2.jpg"},
      {key:"44", id:"number4", name:"Test4", title:"4A great project",  copy:"This is such a good site", src:"img/pinecone2.jpg"},
      {key:"55", id:"number5", name:"Test5", title:"5A great project",  copy:"This is such a good site", src:"img/pinecone2.jpg"},
    ]
  }
  myCount = () => {
    if (count < this.state.quotes.length -1) {
        count++;
    } else if (count >= this.state.quotes.length -1 ) {
        count = 0;
    }
    this.setState({
      testimonial: count
    });
    console.log(this.state.testimonial);
  }
  /*componentDidMount = () => {
    setInterval(this.myCount, 1000);
  }*/
  render = () => {
    let props = this.state.quotes[this.state.testimonial];
    return (
      <div class="homeTestimonials flex center">
        <Testimonials >
          <Testimonial key={props.key} id={props.id} name={props.name} position={props.position} title={props.title} copy={props.copy} src={props.src} />
        </Testimonials>
      </div>
    )
  }
}
