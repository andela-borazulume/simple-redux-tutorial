import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoActions from "../actions/RepoActions"

class Main extends Component {
  constructor() {
    super();
    this.state = {
        bookName: ""
    }
  }

  handleChange(event) {
    this.setState({ bookName: event.target.value });
  }

  handleSubmit(event) {
      event.preventDefault();
      let data = this.state.bookName;

      return new Promise((resolve, reject) => {
          this.props.serviceFetchRepo(data, resolve, reject)
      }).then((val) => {
          this.props.updateUI("uiSubmitting", false);
      })
          .catch((err) => console.log("rejected:", err));
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
