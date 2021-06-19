import React, { Component } from "react";
const MyContext = React.createContext();

export default class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
        current: {
            page: "",
            slug: ""
        },
      messages,
      currentPage: this.currentPage,
      coords: this.fetchCoords(),
    };
  }
  currentPage = (current ={page: "Quicklc8", slug: '/'}) => {
      this.setState({current})
  }
  fetchCoords = () => {
    let output = {
      type: "FeatureCollection",
      features: [],
    };

    coordinates.map((x) =>
      output.features.push({
        type: "Feature",
        geometry: {
          bearing: Number(x.heading),
          type: "Point",
          coordinates: [x.longitude, x.latitude],
        },
        properties: {
          title: "Location",
          description: "Cape town, WC.",
        },
      })
    );

    return output;
  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
const MyConsumer = MyContext.Consumer;
const coordinates = [
  {
    heading: "31",
    latitude: "-33.876115",
    longitude: "18.5008116",
  },
  {
    heading: "310",
    latitude: "-33.9685533",
    longitude: "18.5662383",
  },
  {
    heading: "0",
    latitude: -34.0461583,
    longitude: 18.7047383,
  },
  {
    heading: "0",
    latitude: "-31.8994016",
    longitude: "26.8671716",
  },
  {
    heading: "299",
    latitude: -31.8942983,
    longitude: 26.878175,
  },
  {
    heading: "43",
    latitude: -31.9998233,
    longitude: 27.5801216,
  },
];
const messages = [
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at  2 Worcester Street Grabouw Grabouw",
    subject: "Engine ON for CEO12915",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF247139 is OFF and the taxi is parked  at  Castle 1 Foreshore Cape Town Cape Town",
    subject: "Engine OFF for CF247139",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  Castle 1 Foreshore Cape Town Cape Town",
    subject: "Engine ON for CF247139",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Kraaifontein East Cape Town Cape Town Western Cape",
    subject: "Engine OFF for CF66306",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Kraaifontein East Cape Town Cape Town Western Cape",
    subject: "Engine ON for CF66306",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Kraaifontein East Cape Town Cape Town Western Cape",
    subject: "Engine OFF for CF66306",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  14737 Daza Street Bloekombos Cape Town",
    subject: "Engine ON for CF66306",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  14737 Daza Street Bloekombos Cape Town",
    subject: "Engine OFF for CF66306",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine ON for CF66306",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine ON for CF66306",
    display: "15-Jun",
  },
  {
    message:
      "Engine for CF247139 is OFF and the taxi is parked  at 10 Sering, Delft South, Cape Town, 7100, ",
    subject: "Engine OFF for CF247139",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is OFF and the taxi is parked  at  11 Mbeka Street Pineview Grabouw",
    subject: "Engine OFF for CEO12915",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  Castle 1 Foreshore Cape Town Cape Town",
    subject: "Engine ON for CF247139",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine OFF for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine ON for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine OFF for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  19815 Zenzile Street Bloekombos Cape Town",
    subject: "Engine ON for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  19815 Zenzile Street Bloekombos Cape Town",
    subject: "Engine OFF for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at  47 Main Road Grabouw Grabouw",
    subject: "Engine ON for CEO12915",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  1 Old Marine Drive Foreshore Cape Town",
    subject: "Engine ON for CF247139",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is OFF and the taxi is parked  at  47 Main Road Grabouw Grabouw",
    subject: "Engine OFF for CEO12915",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine ON for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at  2 Worcester Street Grabouw Grabouw",
    subject: "Engine ON for CEO12915",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine ON for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine ON for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine OFF for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at 397 Sea Point Promenade, Sea Point, Cape Town, 8005, ",
    subject: "Engine ON for CF247139",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at N2, Helderberg Rural, Cape Town, 7135, ",
    subject: "Engine ON for CEO12915",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at  47 Main Road Grabouw Grabouw",
    subject: "Engine ON for CEO12915",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  25 Robert Sobukwe Road Unclear Cape Town",
    subject: "Engine ON for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  25 Robert Sobukwe Road Unclear Cape Town",
    subject: "Engine ON for CF66306",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  Castle 1 Foreshore Cape Town Cape Town",
    subject: "Engine ON for CF247139",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at RXXM+CV Grabouw, ",
    subject: "Engine ON for CEO12915",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is OFF and the taxi is parked  at  2 Worcester Street Grabouw Grabouw",
    subject: "Engine OFF for CEO12915",
    display: "14-Jun",
  },
  {
    message:
      "Engine for CEO12915 is OFF and the taxi is parked  at  9 Mbeka Street Pineview Grabouw",
    subject: "Engine OFF for CEO12915",
    display: "13-Jun",
  },
  {
    message:
      "CEO12915 is driving at high and unsafe speed of 116Km/h . Please contact driver. Driving past N2, ",
    subject: "Overspeeding! CEO12915",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  7221 Archer Close Eindhoven Cape Town",
    subject: "Engine ON for CF247139",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  24126 Buso Cres Kraaifontein East Cape Town",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  1 Tiger Avenue Windsor Park Cape Town",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF247139 is OFF and the taxi is parked  at  6 Eindhoven Road Eindhoven Cape Town",
    subject: "Engine OFF for CF247139",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  1 Tiger Avenue Windsor Park Cape Town",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  3 Tiger Avenue Windsor Park Cape Town",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at Die Bos, Cape Town Ward 85, Strand, City of Cape Town, Western Cape, 7140, South Africa",
    subject: "Engine ON for CEO12915",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Daniel Centre 1 New Street Durbanville",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Dlali Street Kraaifontein East Cape Town Cape Town",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at  2 Worcester Street Grabouw Grabouw",
    subject: "Engine ON for CEO12915",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CEO12915 is OFF and the taxi is parked  at  2 Worcester Street Grabouw Grabouw",
    subject: "Engine OFF for CEO12915",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Dlali Street Kraaifontein East Cape Town Cape Town",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  14151 Bharu Street Wallace Dene Cape Town",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Dlali Street Kraaifontein East Cape Town Cape Town",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  La Boheme Street Kraaifontein East Cape Town Cape Town",
    subject: "Engine OFF for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine ON for CF66306",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  Cape Town Voorbrug Cape Town Western Cape",
    subject: "Engine ON for CF247139",
    display: "13-Jun",
  },
  {
    message:
      "Engine for CF247139 is OFF and the taxi is parked  at  337B Main Road Observatory Cape Town",
    subject: "Engine OFF for CF247139",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  19815 Zenzile Street Bloekombos Cape Town",
    subject: "Engine ON for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at Elgin Valley Rd, ",
    subject: "Engine ON for CEO12915",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  19815 Zenzile Street Bloekombos Cape Town",
    subject: "Engine OFF for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CEO12915 is OFF and the taxi is parked  at Elgin Valley Rd, ",
    subject: "Engine OFF for CEO12915",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  44 Loubser Street Ferndale Cape Town",
    subject: "Engine OFF for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  ERF14814 Old Paarl Road Ferndale Cape Town",
    subject: "Engine OFF for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CEO12915 is OFF and the taxi is parked  at  48A Hoof Way Grabouw Grabouw",
    subject: "Engine OFF for CEO12915",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  William Dabbs Street Brackenfell South Cape Town Cape Town",
    subject: "Engine OFF for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  25 Robert Sobukwe Road Unclear Cape Town",
    subject: "Engine ON for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  25 Robert Sobukwe Road Unclear Cape Town",
    subject: "Engine OFF for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  25 Robert Sobukwe Road Unclear Cape Town",
    subject: "Engine ON for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  25 Robert Sobukwe Road Unclear Cape Town",
    subject: "Engine ON for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  Castle 1 Foreshore Cape Town Cape Town",
    subject: "Engine ON for CF247139",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  Castle 1 Foreshore Cape Town Cape Town",
    subject: "Engine ON for CF247139",
    display: "12-Jun",
  },
  {
    message:
      "CEO12915 is no longer overspeeding and is driving at safe speed of 74Km/h . Driving past 99 Oudebrug Rd, ",
    subject: "CEO12915 No longer overspeeding.",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF247139 is OFF and the taxi is parked  at  Castle 1 Foreshore Cape Town Cape Town",
    subject: "Engine OFF for CF247139",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  24126 Buso Cres Kraaifontein East Cape Town",
    subject: "Engine ON for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine ON for CF66306",
    display: "12-Jun",
  },
  {
    message:
      "Engine for CEO12915 is OFF and the taxi is parked  at  11 Mbeka Street Pineview Grabouw",
    subject: "Engine OFF for CEO12915",
    display: "11-Jun",
  },
  {
    message:
      "CEO12915 is no longer overspeeding and is driving at safe speed of 97Km/h . Driving past N2, Grabouw, 7160, ",
    subject: "CEO12915 No longer overspeeding.",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF247139 is OFF and the taxi is parked  at  62 Aalwyn Delft South Cape Town",
    subject: "Engine OFF for CF247139",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at  34 Voorbrug Road Voorbrug Cape Town",
    subject: "Engine ON for CF247139",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  5 Bhunga Street Wallace Dene Cape Town",
    subject: "Engine OFF for CF66306",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF247139 is ON and the taxi is about to move  at 302 Beach Rd, Sea Point, Cape Town, 8005, ",
    subject: "Engine ON for CF247139",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Cape Town Transnet Cape Town Western Cape",
    subject: "Engine ON for CF66306",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Cape Town Transnet Cape Town Western Cape",
    subject: "Engine OFF for CF66306",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Cape Town Transnet Cape Town Western Cape",
    subject: "Engine OFF for CF66306",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  Cape Town Transnet Cape Town Western Cape",
    subject: "Engine ON for CF66306",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  Tienie Meyer Bypass Transnet Cape Town Cape Town",
    subject: "Engine OFF for CF66306",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  24126 Buso Cres Kraaifontein East Cape Town",
    subject: "Engine ON for CF66306",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CEO12915 is ON and the taxi is about to move  at  2 Worcester Street Grabouw Grabouw",
    subject: "Engine ON for CEO12915",
    display: "11-Jun",
  },
  {
    message:
      "Engine for 0665866221 is ON and the taxi is about to move  at 3306 Mnenge St, Crossroads, Cape Town, 7750, ",
    subject: "Engine ON for 0665866221",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is OFF and the taxi is parked  at  24126 Buso Cres Kraaifontein East Cape Town",
    subject: "Engine OFF for CF66306",
    display: "11-Jun",
  },
  {
    message:
      "Engine for CF66306 is ON and the taxi is about to move  at  29265 Kuanda Street Kraaifontein East Cape Town",
    subject: "Engine ON for CF66306",
    display: "11-Jun",
  },
];
export { MyProvider, MyConsumer, MyContext };
