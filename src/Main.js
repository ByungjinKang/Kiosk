import React, { Component } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import mainImg from "./image/back_image.jpg";

export default class Main extends Component {
  render() {
    return (
        <nav className="nav"> 
                <Link to="/navi" className="site-title">
                <img src={mainImg} id='mainImg'/>
          </Link>
        </nav>
      )
    }
} 