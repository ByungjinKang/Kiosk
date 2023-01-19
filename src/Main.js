import React, { Component } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import mainImg from "./image/ppang.jpg";

export default class Main extends Component {
  render() {
    return (
        <nav className="nav"> 
                <Link to="/navi">
                <img src={mainImg} id='mainImg'/>
          </Link>
        </nav>
      )
    }
} 