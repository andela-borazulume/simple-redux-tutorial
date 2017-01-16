import React, { Component } from 'react';
import RepoActions from "../actions.RepoActions"

class Main extends Component {
  constructor() {
    super();
    // this.state = {
    //   bookName: "",
    //   bookList: []
    // }
  }

  handleChange(event) {
    this.setState({ bookName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // const url = "https://www.googleapis.com/books/v1/volumes?q="
    // return fetch(url + this.state.bookName).then(response => {
    //   return response.json()
    // }).then(data => {
    //   this.setState({ bookList: data.items });

    // })
  }

  render() {
    return (
        <form>
            <input type="text" onChange={this.handleChange}/>
            <button type="submit" onClick={this.handleSubmit}>Search </button>
        </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    serviceFetchRepo: (data, resolve, reject) => {
      dispatch(RepoActions.serviceFetchRepo());
    }
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
