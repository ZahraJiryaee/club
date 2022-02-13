import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarker, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./spinning-wheel2.styles.scss";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.spinHandler = this.spinHandler.bind(this);
  }

  spinHandler() {
    console.log("this.props.selectedItem::", this.props.selectedItem);
    if (this.props.selectedItem === null) {
      // const selectedItem = Math.floor(Math.random() * this.props.items.length); // randowmly selecting a item
      const selectedItem = 5;
      console.log("selectedItem:", selectedItem);

      this.props.setSelectedItem(selectedItem); //setting selected item in state
    } else {
      this.props.setSelectedItem(null);
      setTimeout(this.spinHandler, 500);
    }
  }

  render() {
    const { selectedItem, items } = this.props;

    const wheelvars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };

    return (
      <div className="wheel-main">
        <div className="wheel-sub">
          <div
            className={`selector ${selectedItem !== null ? "spinning" : ""}`}
            style={wheelvars}
          >
            {/* <FontAwesomeIcon
              className="icon"
              color="#FFDDA1"
              icon={faMapMarker}
            /> */}
          </div>
          <div className="wheel-container">
            <div
              className={`wheel ${selectedItem !== null ? "spinning" : ""}`}
              style={wheelvars}
              onClick={this.spinHandler}
            >
              <div className="spin">
                <span className="chance-number">3</span>
                <br />
                <span className="chance">شانس</span>
                {/* <p>
                  0<br />
                  شانس
                </p> */}
              </div>

              {items.map((item, index) => (
                <div key={index}>
                  <div
                    className="wheel-item"
                    key={index}
                    style={{
                      "--item-nb": index,
                      "--item-color": item.color,
                    }}
                  >
                    <div className="text">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
