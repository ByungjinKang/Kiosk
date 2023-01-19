import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pay_kio extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>주문 내역 확인</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>주문 정보를 확인해 주세요</h2>
        <br></br>
        <table border={1} cellPadding={50} cellSpacing={0}>
          <tr>
            <td>상품명</td>
            <td>가격</td>
          </tr>
          <tr>
            <td className='pay'>{this.props.title}</td>
            <td className='pay'>{this.props.desc}</td>
          </tr>
        </table>
        <br></br>
      </div>
    )
  }
}