import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.jpg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'
import "../App.css";
import Navbar from './Navbar'

export default class Footer extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5" style = {{fontFamily: "Arial"}} >
        <Link to="/">
          <img alt=""
            src={logo}
            width="150"
            height="95" className="navbar-brand"/>
        </Link>

        <ul className="navbar-nav align-items-left">
          <li className="nav-item ml-1">
          
          <NavbarWrapper>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/aboutus" className="nav-link">
                ABOUT US
              </Link>
            </li>
            </ul>
          </NavbarWrapper>

          
          </li>
        </ul>
      </nav>
      
    )
  }
}


const NavbarWrapper = styled.nav`
    &:hover {
      .buttons{
        border: 1;
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        color: silver;
      } 
    }

`