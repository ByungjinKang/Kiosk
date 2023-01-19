import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { Component } from 'react'

export default function Navbox() {
  return (
    <nav className="nav"> 
    <table>
        <tr>
            <td>
            <Link to="/" >메인</Link>
            </td>
            <td>
            <Link to="/fir">빵</Link>
            </td>
            <td>
            <Link to="/sec">커피</Link>
            </td>
            <td>
            <Link to="/thi">음료</Link>
            </td>
        </tr>
    </table>
    </nav>
  )
}


