import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        return (
            <>
               {
                   mssg.map(x => <li>{x.message}</li>)
               }
            </>
        )
    }
}



let mssg = [
    {
        "message": "Engine for CEO12915 is ON and the taxi is about to move  at  2 Worcester Street Grabouw Grabouw",
        "subject": "Engine ON for CEO12915",
        "display": "15-Jun"
      },
      {
        "message": "Engine for CF247139 is OFF and the taxi is parked  at  Castle 1 Foreshore Cape Town Cape Town",
        "subject": "Engine OFF for CF247139",
        "display": "15-Jun"
      },
      {
        "message": "Engine for CF247139 is ON and the taxi is about to move  at  Castle 1 Foreshore Cape Town Cape Town",
        "subject": "Engine ON for CF247139",
        "display": "15-Jun"
      },
      {
        "message": "Engine for CF66306 is OFF and the taxi is parked  at  Kraaifontein East Cape Town Cape Town Western Cape",
        "subject": "Engine OFF for CF66306",
        "display": "15-Jun"
      },
      {
        "message": "Engine for CF66306 is ON and the taxi is about to move  at  Kraaifontein East Cape Town Cape Town Western Cape",
        "subject": "Engine ON for CF66306",
        "display": "15-Jun"
      },
      {
        "message": "Engine for CF66306 is OFF and the taxi is parked  at  Kraaifontein East Cape Town Cape Town Western Cape",
        "subject": "Engine OFF for CF66306",
        "display": "15-Jun"
      }
]