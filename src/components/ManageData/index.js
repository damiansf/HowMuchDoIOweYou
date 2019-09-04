import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export const ManageData = ({ clearData, uploadData, data }) => (
  <div>
    <div className="data-title">
      <h2>Data, Data Everywhere!</h2>
    </div>
    <div className="manage-data-container">
      <div>
        <div className="download">
          <a href={data} download={"data.json"} className="download-link">
            <FontAwesomeIcon icon={faDownload} /> Download All Data
          </a>
        </div>
        <input
          type="file"
          title="Upload Data"
          className="upload-button"
          id="upload"
          onChange={e => {
            uploadData(e);
          }}
        />
        <label htmlFor="upload" className="upload-file">
          <FontAwesomeIcon icon={faUpload} /> Upload Data
        </label>
        <span
          onClick={() => {
            clearData();
            alert("Data Cleared");
          }}
          className="clear"
        >
          Clear Data
        </span>
      </div>
    </div>
  </div>
);
