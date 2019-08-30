import { ManageData } from "../components/ManageData/index";
import { clearData } from "../actions/actionDefs";
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
    return <ManageData clearData={this.props.clearData} />;
  }
}

const mapDispatchToProps = dispatch => ({
  clearData: () => dispatch(clearData())
});

export default connect(
  null,
  mapDispatchToProps
)(ManageDataContainer);
