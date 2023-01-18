import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_kio';
import { BrowserRouter } from "react-router-dom";

class HelloMessage extends React.Component {
    render() {
         return <div className="greeting">Hello {this.props.name}</div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( 
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
)
