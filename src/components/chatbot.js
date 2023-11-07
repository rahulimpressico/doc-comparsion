import React, { useState } from "react";

export const ChatBot = ({ data, filename }) => {
  const [isLoading, setIsLoading] = useState(true);
  let modifiedRawHTML;
  let modifiedStanderdHTML;

  if (data && data.raw_text) {
    const splitParts = data.raw_text.split("<br>");
    modifiedRawHTML = (
      <div>
        {splitParts.map((part, index) => (
          <div key={index}>{part}</div>
        ))}
      </div>
    );
  }

  if (data && data.standard_text) {
    const splitParts = data.standard_text.split("<br>");
    modifiedStanderdHTML = (
      <div>
        {splitParts.map((part, index) => (
          <div key={index}>{part}</div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          {data && data.raw_text && (
            <>
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
                    height: "760px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  {filename && (
                    <>
                      <h6
                        className="text-center fs-bold"
                        style={{ color: "#002D62" }}
                      >
                        {filename[1]} - Extracted Text
                      </h6>
                    </>
                  )}

                  <div
                    style={{
                      overflow: "scroll",
                      whiteSpace: "nowrap",
                      padding: "1%",
                      width: "100%",
                      height: "95%",
                    }}
                  >
                    {data && data.raw_text && (
                      <div>{modifiedRawHTML}</div>
                      // ) : (
                      //   <div
                      //     className="text-bold text-center"
                      //     style={{ marginTop: "40%" }}
                      //   >
                      //     <h3 style={{ color: "#002D62" }}>Data is not present</h3>
                      //   </div>
                      // )}
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          {data && data.standard_text && (
            <>
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
                    height: "760px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  {filename && (
                    <>
                      <h6
                        className="text-center fs-bold"
                        style={{ color: "#002D62" }}
                      >
                        {filename[1]} - Standard Text
                      </h6>
                    </>
                  )}
                  <div
                    style={{
                      overflow: "scroll",
                      whiteSpace: "nowrap",
                      padding: "1%",
                      width: "100%",
                      height: "95%",
                    }}
                  >
                    {data && data.raw_text ? (
                      <div>{modifiedStanderdHTML}</div>
                    ) : (
                      <div
                        className="text-bold text-center"
                        style={{ marginTop: "40%" }}
                      >
                        <h3 style={{ color: "#002D62" }}>
                          Data is not present
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
