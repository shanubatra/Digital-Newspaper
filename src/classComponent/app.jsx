import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

export default class App extends Component {
  constructor(){
    super()
    this.state ={
      language:"hi",
      search:""
    }
  }
  changeLanguage =(data)=>{
    this.setState({language:data})
  }
  changeSearch =(data)=>{
    this.setState({search:data})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch} />
          <Routes>
            <Route path="/" element={<Home search={this.state.search} language={this.state.language} q="all" />} />
            <Route path="/All" element={<Home search={this.state.search} language={this.state.language} q="all" />} />
            <Route path="/Politics" element={<Home search={this.state.search} language={this.state.language} q="politics" />} />
            <Route path="/Education" element={<Home search={this.state.search} language={this.state.language} q="education" />} />
            <Route path="/Crime" element={<Home search={this.state.search} language={this.state.language} q="crime" />} />
            <Route path="/Entertainment" element={<Home search={this.state.search} language={this.state.language} q="entertainment" />} />
            <Route path="/Science" element={<Home search={this.state.search} language={this.state.language} q="science" />} />
            <Route path="/Technology" element={<Home search={this.state.search} language={this.state.language} q="technology" />} />
            <Route path="/Sports" element={<Home search={this.state.search} language={this.state.language} q="sports" />} />
            <Route path="/Cricket" element={<Home search={this.state.search} language={this.state.language} q="cricket" />} />
            <Route path="/Jokes" element={<Home search={this.state.search} language={this.state.language} q="jokes" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
