import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom"

export default class Content_list extends Component {
  render() {
    return (
      <article>
        <Link to="./pay">
        <button>결제</button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/fir"><button>뒤로</button></Link>
      </article>
    );
  }
}