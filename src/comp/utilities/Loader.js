import React, { Component } from 'react';
import logo from "../../img/quickloc8.svg"
import Container from '@material-ui/core/Container';


export default class Loader extends Component {
    render() {
        return (
           <Container>
               <div>
                   <img style={{ flexGrow: 1}} className="img" src={logo}/>
                    Loading...
               </div>
           </Container>
        )
    }
}
