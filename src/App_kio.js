import React, { Component } from 'react'
import './App_kio.css'
import BevList1 from './BevList1'
import BevList2 from './BevList2'
import BevList3 from './BevList3'
import Content from './Content_list'
import { Route, Routes, Link } from "react-router-dom"
import Navbox from './Navbox'
import Main from './Main'
import Pay_kio from './Pay_kio'

export default class App_kio extends Component {
 constructor(props) {
    super(props);
    this.state = {
        mode : 'first',
        mode2 : 'off',
        selected_content_id: 1,
        content1 : [
            {id :1, title : '프레첼', desc : '3,500원', img: <img src = {require('./image/프레첼.png')}/> },
            {id :2, title : '토스트', desc : '3,000원', img: <img src = {require('./image/토스트.png')}/>},
            {id :3, title : '효모호밀빵', desc : '2,800원', img: <img src = {require('./image/효모호밀빵.png')}/>},
            {id :4, title : '크로와상', desc : '3,500원', img: <img src = {require('./image/크로와상.png')}/> },
            {id :5, title : '파니니', desc : '3,000원', img: <img src = {require('./image/파니니.png')}/>},
            {id :6, title : '샌드위치', desc : '2,800원', img: <img src = {require('./image/샌드위치.png')}/>}
        ],
        content2: [
          { id: 1, title: "아메리카노", desc: "3,000원", img: <img src = {require('./image/아메리카노.png')}/> },
          { id: 2, title: "카페모카", desc: "3,000원", img: <img src = {require('./image/카페모카.png')}/> },
          { id: 3, title: "카라멜 마키아또", desc: "3,500원" , img: <img src = {require('./image/마키아또.png')}/>},
        ],
        content3: [
          { id: 1, title: "캐모마일", desc: "3,000원", img: <img src = {require('./image/캐모마일.png')}/> },
          { id: 2, title: "히비스커스", desc: "3,000원", img: <img src = {require('./image/히비스커스.png')}/>  },
          { id: 3, title: "흑임자라떼", desc: "3,000원", img: <img src = {require('./image/흑임자라떼.png')}/>  },
        ]
  
    }
 }
     
 render() {
    let _title, _desc, _article, _img = null;

    if (this.state.mode == 'first') { 
        var i = 0;
        while(i < this.state.content1.length) { // 빵
          var data = this.state.content1[i];
          if(data.id == this.state.selected_content_id){ 
            _title = data.title;
            _desc = data.desc;  
            _img = data.img;         
            break;
          }
          i = i + 1;
        }
        
    } else if (this.state.mode == 'second') { // 커피
        var i = 0;
        while(i < this.state.content2.length) {
          var data = this.state.content2[i]; 
          if(data.id == this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            _img = data.img;
            break;
          }
          i = i + 1;
        }
    } else if (this.state.mode == 'third') { // 음료
        var i = 0;
        while(i < this.state.content3.length) {
            var data = this.state.content3[i];
            if(data.id == this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            _img = data.img;
            break;
         }
         i = i + 1;
        }
      
    }

    return (
        <>
        <Routes>
          
        <Route path = '/' element= {<Main
          onChangePage = {function(){
            this.setState({
              mode2 : 'off',
            });
          }.bind(this)}>
        </Main>} />

        <Route path = '/navi' element= {<Navbox>
          </Navbox>} />

          <Route path='/fir' element={[<Navbox />,<BevList1         
          onChangePage={function(id) {
            this.setState({
              mode:'first',
              mode2: 'on',
              selected_content_id:Number(id)
            });
          }.bind(this) }
          data={this.state.content1}>
          </BevList1>]} />

              <Route path='/sec' element={[<Navbox />,<BevList2
            onChangePage={function(id) {
            this.setState({
              mode:'second',
              mode2: 'on',
              selected_content_id:Number(id)
            });
          }.bind(this) }
          data={this.state.content2}>
          </BevList2>]} />

              <Route path='/thi' element={[<Navbox />,<BevList3
            onChangePage={function(id) {
            this.setState({
              mode:'third',
              mode2: 'on',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.content3}>
          </BevList3>]} />

          <Route path='/pay' element= {<Pay_kio title={_title} desc ={_desc}
          onChangePage = {function(){
            this.setState({
              mode2 : 'off',
            });
          }.bind(this)}
          />}/>

    </Routes>
        <div className="App">
        {this.state.mode2 == 'on' ?
        <Content>
        </Content> : null
        }
        
     </div>
    </>       
    )
 }
}