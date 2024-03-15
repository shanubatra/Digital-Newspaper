import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }
  getAPIData = async (query = "all") => {
    let response = await fetch(`
    https://api.worldnewsapi.com/search-news?api-key=adfb3518b2494a8e9cd0388519c04f57&source-countries=in&text=${query}&language=${this.props.language}`);
    response = await response.json();
    console.log(response);
    this.setState({
      articles: response.news,
      totalResults: response.available,
    });
  };

  componentDidMount() {
    this.getAPIData();
  }
  componentDidUpdate(old) {
    if (this.props !== old) {
      if (this.props.search === "" || this.props.search === old.search)
        this.getAPIData(this.props.q);
      else this.getAPIData(this.props.search);
    }
  }
  render() {
    {
      console.log(this.state.articles);
    }
    return (
      <div className="container-fluid">
        <h5 className="background p-2 text-light text-center text-capitalize my-2">
          {this.props.q} News Articles
        </h5>
        <div className="row">
          {this.state.articles.map((item, index) => {
            return (
              <NewsItem
                key={index}
                pic={item.image}
                title={item.title}
                description={item.text}
                url={item.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
