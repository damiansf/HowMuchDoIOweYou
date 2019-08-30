import { ManageData } from "../components/ManageData/index";
import React from "react";
import { connect } from "react-redux";

class ManageDataContainer extends React.Component {
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
      <ManageData></ManageData>
    );
  }
}
  
  export default connect(
    null,
    null
  )(ManageDataContainer);
