import React from "react";

export const ManageData = ({ clearData }) => (
  <div>
    <button>Download Data</button>
    <button>Upload Data</button>
    <button onClick={clearData}>Clear Data</button>
  </div>
);
