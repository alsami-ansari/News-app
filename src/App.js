
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize= 6;

  apiKey= process.env.REACT_APP_NEWS_API

   state = {
  progress: 0
}

   setProgress =(progress) =>{
  this.setState({progress: progress})
}




  render() {
    return (
      <div>
 <Navbar/>
 <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress} />



        {/* <News setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="" /> */}
     <Routes>
       

     
   <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} exact />
   <Route  path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="in" category="business" exact />} />
   <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} exact />
   <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" category="general" />} exact />
   <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />} exact />
   <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />} exact />
   <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />} exact />
   <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} exact />
        </Routes>
      </div>
    )
  }
}
