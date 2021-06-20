import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

export default class Error extends Component {
    componentDidMount(){
        this.props.currentPage({page: "Error", slug:null})
    }
    render() {
        return (
            <div style={{border: "2px solid #a7a7a71c", width: "100%", textAlign: "center", alignItems: "center", height: "100vh", padding : "100px"}}>
            <h1> Error Occurred! </h1>
           <p><b>Message:</b> {this.props.error}</p>
           <Button colour="danger" variant="outlined">
          <a style={{textDecoration:"none", color:'#4f4f4f'}} className="btn" href="/">Refresh</a>
          </Button>
        </div>
        )
    }
}
Error.propTypes = {
    currentPage: PropTypes.func,
    error: PropTypes.string
  };