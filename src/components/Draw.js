import React from "react";
import { SketchField, Tools } from "react-sketch";

export default class Draw extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      initialX: 0,
      initialY: 0,
      v: {}
    };
  }

  clearSignature = e => {
    console.log(this.drawRef.toJSON());
    this.drawRef.clear();
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.drawRef);
    const saved = this.drawRef.toDataURL();
    this.setState({
      saved
    });
  };

  render() {
    // console.log(this.state.saved);

    return (
      <div>
        <div style={{ position: "absolute" }}>
          <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
        </div>
        <div style={{ zIndex: 1000, width: "100%", height: "100%" }}>
          <SketchField
            ref={node => (this.drawRef = node)}
            // width="100%"
            height={1000}
            style={{ border: "1px solid #333" }}
            tool={Tools.Circle}
            lineColor="black"
            lineWidth={2}
            value={this.state.v}
            defaultValue={this.state.v}
          />
        </div>
        <button onClick={this.handleSubmit}>Save</button>
        <button onClick={this.clearSignature}>Clear</button>
      </div>
    );
  }
}
