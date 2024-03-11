import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-10">
        <div className="card">
          <img
            src={this.props.pic ? this.props.pic : "/image/noimage.jpg"}
            height="200px"
            className="card-img-top"
            alt="Loading"
          />
          <div className="card-body">
            <h5 className="card-title">
              {this.props.title.slice(0, 100) + "..."}
            </h5>
            <p className="card-text">
              {this.props.description
                ? this.props.description.slice(0, 150) + "..."
                : this.props.description}
            </p>
            <a
              href={this.props.url}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    );
  }
}
