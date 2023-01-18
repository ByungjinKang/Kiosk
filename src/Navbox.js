import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { Component } from 'react'

export default function Navbox() {
  return (
    <nav className="nav"> 
    <table>
        <tr>
            <td>
            <Link to="/" className="site-title">
        Home
      </Link>
            </td>
            <td>
            <Link to="/fir">first메뉴</Link>
            </td>
            <td>
            <Link to="/sec">second메뉴</Link>
            </td>
            <td>
            <Link to="/thi">third메뉴</Link>
            </td>
        </tr>
    </table>
    
      
        
        
        
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
