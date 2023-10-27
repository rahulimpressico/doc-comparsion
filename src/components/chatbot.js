import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChatBot = () => {
  const [english_table1, setEnglish_table1] = useState({
    id: 1,
    text: "lease agreement",
    children: [
      {
        id: "1 or 1.1",
        text: "abide",
        children: [
          {
            id: "1.1.1",
            text: "subclass text",
          },
        ],
      },
    ],
  });
  const [english_table2, setEnglish_table2] = useState();

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <h4 className="text-center fs-bold mt-1" style={{ color: "#002D62" }}>
            Report
          </h4>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
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
                height: "660px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            >
              <h6 className="text-center fs-bold" style={{ color: "#002D62" }}>
                Original OCR Text
              </h6>
              <div
                style={{
                  overflow: "scroll",
                  whiteSpace: "nowrap",
                  padding: "1%",
                  width: "100%",
                  height: "95%",
                }}
              ></div>
              {/* <textarea
                style={{
                  width: "100%",
                  height: "95%",
                  outline: "none",
                  border: "0px",
                }}
              ></textarea> */}
            </div>
          </div>
          <div className="col-md-6">
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
                height: "660px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            >
              <h6 className="text-center fs-bold" style={{ color: "#002D62" }}>
                Formated OCR Text{" "}
              </h6>
              <div
                style={{
                  overflow: "scroll",
                  whiteSpace: "nowrap",
                  padding: "1%",
                  width: "100%",
                  height: "95%",
                }}
              ></div>
              {/* <textarea
                style={{
                  width: "100%",
                  height: "95%",
                  outline: "none",
                  border: "0px",
                }}
              ></textarea> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
