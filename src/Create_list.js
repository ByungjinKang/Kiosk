import React, { Component } from 'react'

export default class Create_list extends Component {
  render() {
    return (
      <div>
        <form action='create_process' method="post"
        onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value,
          );
        }.bind(this)}
        >
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </div>
    )
  }
}
