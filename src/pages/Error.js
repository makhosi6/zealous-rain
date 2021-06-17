import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div style={{border: "2px solid #a7a7a71c", width: "100%", textAlign: "center", alignItems: "center", height: "100vh"}}>
            <h1> Error Occurred! </h1>
           <p><b>Message:</b> {this.props.error}</p>
           <Button variant="outlined">
          <a style={{textDecoration:"none", color:'#4f4f4f'}} className="btn" href="/">Refresh</a>
          </Button>
        </div>
        )
    }
}
