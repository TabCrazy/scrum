require('normalize.css/normalize.css');
require('antd/dist/antd.css');
require('styles/App.scss');


import React from 'react';
import {Affix} from 'antd';
import Navigation from './Nav';
import Discuss from './discuss/discuss';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Affix>
          <Navigation />
        </Affix>
        <div className="content">
          <Discuss/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
