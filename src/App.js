/*jshint esversion: 6 */

/* jshint ignore:start */

import React from 'react';

export default class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { name: null, authorized: false };
            this.authorize = this.authorize.bind(this);
        }

        authorize(e) {

        }

        render() {
            return ( < h1 > { this.state.authorized ? 'Authorized' : 'Not authorized' } < /h1> )
            }
        }