import React from 'react';
import Helmet from 'react-helmet'

const Head = () => (
  <Helmet
    title="Gatsby Default Starter"
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
    ]}
  />
)
export default Head;
