import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export const ManageData = ({ clearData, uploadData, data }) => (
  <div>
    <div className="containers">
      <h2 className="titles" >Data, Data Everywhere!</h2>
      <div>
        <label className="download">
          <a href={data} download={"data.json"} className="download-link">
            <FontAwesomeIcon icon={faDownload} /> Download All Data
          </a>
        </label>
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
            let response = window.confirm(
              "Are you sure you want to wipe all data?"
            );
            if (response) {
              clearData();
              alert("Data Cleared");
            }
          }}
          className="clear"
        >
          Clear Data
        </span>
      </div>
    </div>
  </div>
);
