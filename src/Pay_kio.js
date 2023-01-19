import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pay_kio extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>주문 내역 확인</h1>
        <hr></hr>
        <br></br>
        <h2>주문 정보를 확인해 주세요</h2>
        <br></br>
        <table border={0} cellPadding={0} cellSpacing={30}>
          <tr>
            <td>상품명</td>
            <td>가격</td>
          </tr>
          <tr>
            <td>{this.props.title}</td>
            <td>{this.props.desc}</td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
        <Link to="/fir"><button>뒤로</button></Link>
        <br></br>
      </div>
    )
  }
}
