import { Link } from "react-router-dom"
import React, { Component } from 'react'

export default function Navbox() {
  return (
    <nav className="nav"> 
    <ul>
        <li><Link to="/"><button>메인</button></Link></li>
        <li><Link to="/fir"><button>빵</button></Link></li>
        <li><Link to="/sec"><button>커피</button></Link></li>
        <li><Link to="/thi"><button>음료</button></Link></li>
      </ul>
    </nav>
  )
}


