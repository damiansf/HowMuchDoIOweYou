import React from "react";

export const ManageData = ({ clearData, uploadData, data }) => (
  <div>
    <a href={data} download={"data.json"}>
      Download Data
    </a>
    <span>Upload Data</span>
    <input
      type="file"
      title="Upload Data"
      onChange={e => {
        uploadData(e);
      }}
    />
    <button onClick={clearData}>Clear Data</button>
  </div>
);
