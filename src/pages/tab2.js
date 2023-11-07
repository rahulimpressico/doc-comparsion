import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tabs.css";
import { NavBar } from "../components/navbar";
import { Tab3 } from "./tab3";
import { ColorRing } from "react-loader-spinner";

const apiUrl = process.env.REACT_APP_API_URL;

export const Tab2 = () => {
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [data, setData] = useState([]);
  const [fileViewData, setfileViewData] = useState([]);
  const [compareDoc, setCompareDoc] = useState({ diff: "" });
  const [tableContent, setTableContent] = useState("");
  const [showHeading, setShowHeading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [datavalue, setDatavalue] = useState("");
  const [headValue, setHeadValue] = useState("");

  const handleRadioChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    setHeadValue(value);
    setDatavalue(value);
    if (target.id === "flexRadioDefault1") {
      setShowHeading(true);
      setShowData(false);
    } else if (target.id === "flexRadioDefault2") {
      setShowHeading(false);
      setShowData(true);
    }
  };

  const fielSuggestion = async () => {
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
      setfileViewData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/docs`, {
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

  const compareDocument = async () => {
    if (file1 && file2) {
      try {
        const response = await axios.get(
          `${apiUrl}/doc/compare?doc_id1=${file1}&doc_id2=${file2}&text_type=summary`,
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

        setCompareDoc(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fielSuggestion();
    fetchData();
  }, []);
  useEffect(() => {
    compareDocument();
  }, [showHeading, file1, file2]);

  useEffect(() => {
    const parseDiff = () => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(compareDoc.diff, "text/html");

      const tableElement = doc.querySelector("table");

      if (tableElement) {
        setTableContent(tableElement.outerHTML);
      }
    };

    parseDiff();
  }, [compareDoc.diff]);

  return (
    <>
      <div className="container-fluid">
        <NavBar />
        <div className="row">
          {data && (
            <>
              <div className="col-md-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onClick={(e) => {
                    setFile1(e.target.value);
                  }}
                >
                  <option value="">Select your file</option>
                  {fileViewData ? (
                    fileViewData.map((file) => (
                      <option key={file.doc_id} value={file.doc_id}>
                        {file.doc_name}
                      </option>
                    ))
                  ) : (
                    <option value="">No files available</option>
                  )}
                </select>
              </div>
            </>
          )}

          {fileViewData && (
            <>
              <div className="col-md-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onClick={(e) => {
                    setFile2(e.target.value);
                  }}
                >
                  <option value="">Select your file</option>
                  {fileViewData ? (
                    fileViewData.map((file) => (
                      <option key={file.doc_id} value={file.doc_id}>
                        {file.doc_name}
                      </option>
                    ))
                  ) : (
                    <option value="">No files available</option>
                  )}
                </select>
              </div>
            </>
          )}
        </div>
        {file1 && file2 && (
          <>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={handleRadioChange}
                value="summary"
                onClick={compareDocument}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Heading Comparison
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={handleRadioChange}
                value="standard"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Full Comparison
              </label>
            </div>
          </>
        )}

        <div
          className="row"
          style={{ marginTop: file1 && file2 ? "5px" : "20px" }}
        >
          <div className="col-md-2"></div>

          <div className="col-md-8">
            <table className="table text-center" border="" summary="Colors">
              <tr>
                <td className="diff_add">Added</td>
                <td className="diff_chg">Changed</td>
                <td className="diff_sub">Deleted</td>
              </tr>
            </table>
          </div>

          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%",
              border: "0",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              height: "auto",
            }}
          >
            {showHeading && (
              <>
                <div className="row">
                  <div
                    style={{
                      overflow: "scroll",
                      whiteSpace: "nowrap",
                      width: "100%",
                    }}
                  >
                    {" "}
                    {compareDoc.diff ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: compareDoc.diff }}
                      />
                    ) : (
                      <>
                        <div
                          className="d-flex align-items-center"
                          style={{
                            paddingLeft: "50%",
                            paddingBottom: "20%",
                            paddingTop: "20%",
                          }}
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
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            {showData && <Tab3 heading={showHeading} value={headValue} />}
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                border: "0",
                height: "34vh",
              }}
            >
              {!showHeading && !showData && (
                <div style={{ marginTop: "20%" }}>
                  <h4 className="text-center alert alert-info">
                    No record found
                    <br />
                    Please select both files and
                    <br />
                    Comparison choice.
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
