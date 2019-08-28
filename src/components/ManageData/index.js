import React from "react";

export default class ManageData extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.downloadData = this.downloadData.bind(this);
    this.uploadData = this.uploadData.bind(this);
  }

  downloadData() {}

  uploadData() {}

  render() {
    return (
      <div>
        <input type="button" value="Upload Data" onClick={this.uploadData} />
        <input type="button" value="Download Data" onClick={this.downloadData} />
      </div>
    );
  }
}
