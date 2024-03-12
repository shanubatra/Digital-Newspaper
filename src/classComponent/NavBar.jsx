import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  postSearch(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({ search: "" });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            NewsApp
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa fa-bars bg-light p-2 text-dark"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/All">
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Politics">
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Crime">
                  Crime
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Technology">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Cricket">
                      Cricket
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Jokes">
                      Jokes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => this.props.changeLanguage("hi")}
                    >
                      Hindi
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => this.props.changeLanguage("en")}
                    >
                      English
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => this.postSearch(e)}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => this.setState({ search: e.target.value })}
                name="Search"
                value={this.state.search}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
