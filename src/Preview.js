import React, { Component } from "react";
import Radium from "radium";
import SVGRenderer from "./SVGRenderer";

import { Text, Path, Rect, Circle } from "./objects";

class Preview extends Component {
  static defaultProps = {
    objectTypes: {
      text: Text,
      rectangle: Rect,
      circle: Circle,
      polygon: Path,
      image: Image
    }
  };

  componentWillMount() {
    this.objectRefs = {};
  }

  render() {
    let { width, height, objects, objectTypes } = this.props;

    let style = {
      ...styles.container,
      ...this.props.style,
      width: width,
      height: height
    };

    let canvas = {
      width,
      height,
      canvasWidth: width,
      canvasHeight: height
    };

    return (
      <div className={"container"} style={style}>
        <SVGRenderer
          width={width}
          height={height}
          objects={objects}
          objectRefs={this.objectRefs}
          objectTypes={objectTypes}
          canvas={canvas}
          onRender={ref => (this.svgElement = ref)}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    position: "relative"
  }
};

export default Radium(Preview);
