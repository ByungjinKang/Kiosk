import React, { Component } from 'react'

export default class Content_list extends Component {
  render() {
    console.log ("rendering");
    return (
      <article>
        <h2>{this.props.title}</h2>
          <p>
            <input type="button" value="담기"></input>
          </p>
        {/* {this.props.desc} */}
      </article>

    );
  }
}
