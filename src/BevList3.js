import React, { Component } from 'react'

export default class BevList3 extends Component {
    render() {
      var lists = [];
      var data = this.props.data;
      data.forEach((item, index) => {
        lists.push(
          <li key={data[index].id}>
            <a 
              href={+data[index].id}
              onClick= {
                function (e) {
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
                }.bind(this)
              }
              data-id={data[index].id}
            >{data[index].img}{data[index].title}</a>
          </li>);
      });
      return (
        <nav>
          <hr></hr>
          <ul>
              {lists}
          </ul>
        </nav>
      )
    }
  }
