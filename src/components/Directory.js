import React, { Component } from "react";
// add this import to use the components in reactstrap
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Directory extends Component {
  //this is the new constructor. We moved state up to the App component
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsite: null,
    };
  }
  // add this
  onCampsiteSelect(campsite) {
    this.setState({ selectedCampsite: campsite });
  }

  // what does this do?
  renderSelectedCampsite(campsite) {
    if (campsite) {
      return (
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    // OLD:
    // const directory = this.state.campsites.map((campsite) => {
    //   return (
    //     <div key={campsite.id} className="col">
    //       <img src={campsite.image} alt={campsite.name} />
    //       <h2>{campsite.name}</h2>
    //       <p>{campsite.description}</p>
    //     </div>
    //   );
    // });
    // NEW:
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{directory}</div>
        {/* add below */}
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCampsite(this.state.selectedCampsite)}
          </div>
          {/* add above */}
        </div>
      </div>
    );
  }
}

export default Directory;
