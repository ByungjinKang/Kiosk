import React, { Component } from "react";

export default class Content_list extends Component {
  render() {
    //console.log ("rendering");
    return (
      <article>
        <h3>
          {this.props.title}
          <br></br>
          <br></br>
          {this.props.desc}
        </h3>
        <p>
          <input type="button" value="담기"></input>
        </p>
      </article>
    );
  }
}
