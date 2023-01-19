import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom"

export default class Content_list extends Component {
  render() {
    return (
      <article>
        <Link to="./pay">
        <button onClick={window.location.replace("/")}>결제</button>
      </Link>
      </article>
    );
  }
}