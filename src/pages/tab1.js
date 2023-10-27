import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChatBot } from "../components/chatbot";

export const Tab1 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/docs", {
          headers: {
            "Cache-Control": "no-cache",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate",
            Connection: "keep-alive",
          },
        });
        // console.log(response)
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fuid" style={{padding:"0% 4%"}}>
        <div className="row">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
              border: "0",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              height: "auto",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <h5
                      className="fw-bold float-start"
                      style={{ color: "#002D62" }}
                    >
                      {" "}
                      File Viewer
                    </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="float-end">
                    <label
                      htmlFor="file-upload"
                      style={{
                        display: "inline-block",
                        padding: "5px 15px",
                        backgroundColor: "#3498db",
                        color: "#fff",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          marginRight: "5px",
                          verticalAlign: "middle",
                        }}
                      >
                        +
                      </span>
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      accept=".pdf, .docx"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    {selectedFile && <p>Selected File: {selectedFile.name}</p>}
                  </div>
                </div>
              </div>

              <div className="row">
                {data && (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>File Name</th>
                        <th>Upload Time</th>
                        <th>File Size</th>
                        <th>Pages</th>
                        <th>File Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(data).map(([property, value]) => {
                        return (
                          <tr key={property}>
                            <td
                              onClick={() => setSelectedFileName(property)}
                              style={{ color: "#002D62", cursor: "pointer" }}
                            >
                              {property}
                            </td>
                            <td>{value["upload-time"]}</td>
                            <td>{value["filesize"]}</td>
                            <td>{value["pages"]}</td>
                            <td>{value["filetype"]}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <p>
              Selected File Name:{" "}
              <span className="fw-bold" style={{ color: "#002D62" }}>
                {selectedFileName || "None"}
              </span>
            </p>
            {selectedFileName && (
              <>
                <button className="btn btn-secondary">Extract Text</button>
              </>
            )}
          </div>
          <div className="col-md-9"> </div>
        </div>

        <div className="row mt-5">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
              border: "0",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              height: "auto",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              marginBottom: "80px",
              paddingBottom: "40px",
            }}
          >
            <ChatBot />
          </div>
        </div>
      </div>
    </>
  );
};
