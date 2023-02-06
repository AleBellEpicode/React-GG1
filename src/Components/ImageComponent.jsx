import React from "react";
class ImageComponent extends React.Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        style={{
          width: 500 + this.props.width,
          height: 500 + this.props.height,
          border: this.props.border,
          borderRadius: this.props.radius,
        }}
      />
    );
  }
}
export default ImageComponent;
