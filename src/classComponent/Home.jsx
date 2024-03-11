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
  getAPIData = async (query = "All") => {
    let response = await fetch(`
    https://newsapi.org/v2/everything?q=${query}&language=${this.props.language}&sortBy=publishedAt&apiKey=ae42e0ab8270414aa091f62ec1a853d4`);
    response = await response.json();
    this.setState({
      articles: response.articles,
      totalResults: response.totalResults,
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
    return (
      <div className="container-fluid">
        <h5 className="background p-2 text-light text-center my-2">
          {this.props.q} News Articles
        </h5>
        <div className="row">
          {this.state.articles.map((item, index) => {
            return (
              <NewsItem
                key={index}
                pic={item.urlToImage}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
