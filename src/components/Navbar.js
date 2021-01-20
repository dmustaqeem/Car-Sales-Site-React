import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.jpg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <AddShaders>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
          <Link to="/">
            <img alt=""
              src={logo}
              width="150"
              height="95" className="navbar-brand"/>
          </Link>

          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                CARS
              </Link>
            </li>
          </ul>
        
        <div className = "ml-auto">
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/cart" className="nav-link">
                CART
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/contactus" className="nav-link">
                CONTACT US
              </Link>
            </li>
          </ul>
          </div>
      </nav>
      </AddShaders>
    )
  }
}


const AddShaders = styled.nav`
    
`