import React, { Component } from 'react'
import './App.css'
import BevList1 from './BevList1'
import BevList2 from './BevList2'
import BevList3 from './BevList3'
import Content from './Content_list'
import { Route, Routes } from "react-router-dom"
import Navbox from './Navbox'
import Create_list from './Create_list'

export default class App_kio extends Component {
 constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
        mode : 'first',
        mode2 : 'off',
        put : 'off',
        selected_content_id: 1,
        content1 : [
            {id :1, title : 'first의 1번', desc : '3,000원'},
            {id :2, title : 'first의 2번', desc : '3,000원'},
            {id :3, title : 'first의 3번', desc : '3,000원'}
        ],
        content2 : [
            {id :1, title : 'second의 1번', desc : '3,000원'},
            {id :2, title : 'second의 2번', desc : '3,000원'},
            {id :3, title : 'second의 3번', desc : '3,000원'}
        ],
        content3 : [
            {id :1, title : 'third의 1번', desc : '3,000원'},
            {id :2, title : 'third의 2번', desc : '3,000원'},
            {id :3, title : 'third의 3번', desc : '3,000원'}
        ]
    }
 }
     
 render() {
    let _title, _desc, _article = null;

    if (this.state.mode == 'first') { 
        var i = 0;
        while(i < this.state.content1.length) {
          var data = this.state.content1[i];
          if(data.id == this.state.selected_content_id){ 
            _title = data.title;
            _desc = data.desc;            
            break;
          }
          i = i + 1;
        }
        
    } else if (this.state.mode == 'second') {
        var i = 0;
        while(i < this.state.content2.length) {
          var data = this.state.content2[i]; 
          if(data.id == this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i = i + 1;
        }
    } else if (this.state.mode == 'third') {
        var i = 0;
        while(i < this.state.content3.length) {
            var data = this.state.content3[i];
            if(data.id == this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            break;
         }
         i = i + 1;
        }
        if(this.state.put == 'on') {
          _article = <Create_list onSubmit={function(_title, _desc) {
            this.max_content_id = this.max_content_id+1;
            var _contents = this.state.contents.concat(
              {id:this.max_content_id, title:_title, desc:_desc}
            );
            this.setState({
              contents:_contents
            });
            console.log(_title, _desc);
          }.bind(this)
        }></Create_list>
        } console.log("render", this);
    }

    

    

    return (
        <>
        
        <Navbox />
        <Routes>
          <Route path='/fir' element={<BevList1         
          onChangePage={function(id) {
            this.setState({
              mode:'first',
              mode2: 'on',
              selected_content_id:Number(id)
            });
          }.bind(this) }
          data={this.state.content1}>
          </BevList1>} />
              <Route path='/sec' element={<BevList2
            onChangePage={function(id) {
            this.setState({
              mode:'second',
              mode2: 'on',
              selected_content_id:Number(id)
            });
          }.bind(this) }
          data={this.state.content2}>
          </BevList2>} />
              <Route path='/thi' element={<BevList3
            onChangePage={function(id) {
            this.setState({
              mode:'third',
              mode2: 'on',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.content3}>
          </BevList3>} />
    </Routes>
        <div className="App">
        {this.state.mode2 == 'on' ?
        <Content title={_title}  desc ={_desc}>
        </Content> : null
        }
        {_article}
        
     </div>
    </>       
    )
 }
}
