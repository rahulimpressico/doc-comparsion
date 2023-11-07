import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChatBot } from "../components/chatbot";
import { ColorRing } from "react-loader-spinner";

const apiUrl = process.env.REACT_APP_API_URL;

export const Tab1 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [ocrData, setOcrData] = useState({});
  const [fileUploaded, setFileUploaded] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const selected_fileview = async () => {
    if (selectedFileName) {
      setLoading(true);
      try {
        const response = await axios.get(
          `${apiUrl}/doc/text?doc_id=${selectedFileName[0]}`,
          {
            headers: {
              "Cache-Control": "no-cache",
              "Access-Control-Allow-Origin": "*",
              Accept: "*/*",
              "Accept-Encoding": "gzip, deflate",
              Connection: "keep-alive",
            },
          }
        );

        setOcrData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/docs?user_id=1`, {
        headers: {
          "Cache-Control": "no-cache",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate",
          Connection: "keep-alive",
        },
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    selected_fileview();
  }, [selectedFileName]);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        `${apiUrl}/doc-upload?user_id=1`,
        formData
      );
      console.log("File uploaded successfully:", response.data);

      if (response) {
        fetchData();
        setFileUploaded(true);
        setSelectedFile(null);
        setLoading(false);
      }
    } catch (error) {
      if (error.response) {
        setError("Server responded with an error: " + error.response.data);
      } else if (error.request) {
        setError("No response received from the server");
      } else {
        setError("Request setup error: " + error.message);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fuid" style={{ padding: "0% 4%" }}>
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
                    <form onSubmit={handleFileUpload}>
                      <input
                        type="file"
                        id="file-upload"
                        accept=".pdf, .docx"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                      {selectedFile && (
                        <p>Selected File: {selectedFile.name}</p>
                      )}
                      {selectedFile && (
                        <button
                          className="btn btn-primary mt-2"
                          style={{ marginLeft: "70%" }}
                        >
                          Upload
                        </button>
                      )}
                    </form>
                    {selectedFile && (
                      <>
                        {loading ? (
                          <div className="loader">
                            <ColorRing
                              visible={true}
                              height="80"
                              width="80"
                              ariaLabel="blocks-loading"
                              wrapperStyle={{}}
                              wrapperClass="blocks-wrapper"
                              colors={[
                                "#e15b64",
                                "#f47e60",
                                "#f8b26a",
                                "#abbd81",
                                "#849b87",
                              ]}
                            />
                          </div>
                        ) : (
                          <>
                            {fileUploaded && <p>File uploaded successfully</p>}
                            {error && <p>{error}</p>}
                          </>
                        )}
                      </>
                    )}
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

                        <th>File Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((document) => {
                        return (
                          <tr key={document.doc_id}>
                            <td
                              onClick={() =>
                                setSelectedFileName([
                                  document.doc_id,
                                  document.doc_name,
                                ])
                              }
                              style={{ color: "#002D62", cursor: "pointer" }}
                            >
                              {document.doc_name}
                            </td>
                            <td>{document.ts_upload}</td>
                            <td>{document.size}</td>
                            <td>{document.doc_type}</td>
                            <td
                              style={{
                                color:
                                  document.status === "ready" ? "green" : "red",
                                fontWeight: "bold",
                              }}
                            >
                              {document.status}
                            </td>
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
        <div className="row mt-4">
          <div className="col-md-3">
            <p>
              Selected File Name:{" "}
              <span className="fw-bold" style={{ color: "#002D62" }}>
                {selectedFileName ? selectedFileName[1] : "None"}
              </span>
            </p>
            {/* {selectedFileName && (
              <>
                <button className="btn btn-secondary">Extract Text</button>
              </>
            )} */}
          </div>
          <div className="col-md-9"> </div>
        </div>

        <div className="row mt-2">
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
              marginBottom: "80px",
              paddingBottom: "40px",
            }}
          >
            {loading ? (
              <div className="loader">
                <div
                  className="loader"
                  style={{ paddingLeft: "45%", paddingTop: "8%" }}
                >
                  <ColorRing
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </div>
              </div>
            ) : Object.keys(ocrData).length === 0 ? (
              <ChatBot selectedFileData={data} />
            ) : (
              <ChatBot
                data={ocrData}
                selectedFileData={data}
                filename={selectedFileName}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
