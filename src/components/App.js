import React, {PropTypes} from 'react';
import Header from "./common/Header";
import {connect} from 'react-redux';

class App extends React.Component {


  componentWillMount() {
    console.log("App componentWillMount");
  }

  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
