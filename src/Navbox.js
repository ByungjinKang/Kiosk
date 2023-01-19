import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { Component } from 'react'

export default function Navbox() {
    return (
      <nav className="nav"> 
      <ul>
        <li><Link to="/" className="site-title"><button>메인</button></Link></li>
        <li><Link to="/fir"><button>빵</button></Link></li>
        <li><Link to="/sec"><button>커피</button></Link></li>
        <li><Link to="/thi"><button>음료</button></Link></li>
      </ul>
    </nav>
  )
}

/*Link 컴포넌트 -> 클릭하면 다른 주소로 이동시켜주는 컴포넌트
페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 페이지 주소만 변경

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
}*/