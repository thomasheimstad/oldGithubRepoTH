import React from 'react';
import microdata from 'node-microdata-scraper';
const url       = 'https://raw.github.com/mhausenblas/schema-org-rdf/master/examples/Thing/Product/Product.microdata';

export default class Scrapper extends React.Component {
  componentDidMount = () => {
    microdata.parseUrl(url, function(err, json) {
      if (!err && json) {
        console.log(json);
      }
    })
  }
  render = () => {
    return (
      <div>test</div>
    )
  }
}
