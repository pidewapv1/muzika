import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from '../SearchForm';

import './Menu.css';

export default class Menu extends Component {
  getValue = val => this.props.dataSearch(val);

  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Newsfeed
            </NavLink>
          </li>
        </ul>

        <SearchForm dataSearch={this.getValue} />
      </nav>
    );
  }
}
