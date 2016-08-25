/**
 * Created by TabTang on 2016/7/31.
 */

import React from 'react';
import {Icon , Dropdown } from 'antd';
import NavUser from './Nav_user'

const DropUser = (
  <div className="wrap">
    <NavUser/>
  </div>
);

class Navigation extends React.Component {

  render(){
    return (
      <header className="head">
        <div className="logo"> <Icon type="laptop" /> <span>Hello Agile</span></div>
        <div className="nav">
          <ul>
            <li>Agile</li>
            <li>Discuss</li>
            <li>Team</li>
            <li>Message</li>
            <li>About</li>
            <li>
              <Dropdown overlay = {DropUser} trigger = {['click']}>
                <a><Icon type="user" /></a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </header>
    )
  }


}

export default Navigation;
