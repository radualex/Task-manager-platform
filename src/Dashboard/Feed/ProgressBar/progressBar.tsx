import React, { Component } from "react";
import "./progressBar.scss";

interface ProgressBarProps {
  progress: number;
}

export class ProgressBar extends Component<ProgressBarProps> {
  render() {
    return (
      <div className="track">
        <div className="thumb" style={{ width: `${this.props.progress}%` }} />
      </div>
    );
  }
}
