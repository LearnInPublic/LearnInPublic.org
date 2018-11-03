import React from 'react';
import { withSiteData } from 'react-static';
//
// import logoImg from '../logo.png';

import netlifyIdentity from 'netlify-identity-widget';

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <h1>Learn in Public</h1>
    <button onClick={() => netlifyIdentity.open()}>skjdlskjd</button>
  </div>
));
