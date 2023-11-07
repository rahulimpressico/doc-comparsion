import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tabs.css";
import { ColorRing } from "react-loader-spinner";

const apiUrl = process.env.REACT_APP_API_URL;

export const Tab3 = ({ heading, value }) => {
  const [compareDoc, setCompareDoc] = useState({ diff: "" });
  const [tableContent, setTableContent] = useState("");

  const compareDocument = async () => {
    try {
      let url;

      if (value == "standard") {
        url = `${apiUrl}/doc/compare?doc_id1=1&doc_id2=2&text_type=standard`;

        const response = await axios.get(url, {
          headers: {
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate",
            Connection: "keep-alive",
          },
        });
        setCompareDoc(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    compareDocument();
  }, [heading]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(compareDoc.diff, "text/html");

    const tableElement = doc.querySelector("table");

    if (tableElement) {
      setTableContent(tableElement.outerHTML);
    }
  }, [compareDoc.diff]);

  return (
    <>
      <div className="row">
        <div
          style={{
            overflow: "scroll",
            whiteSpace: "nowrap",
            padding: "1%",
            width: "100%",
          }}
        >
          {" "}
          {compareDoc.diff ? (
            <div dangerouslySetInnerHTML={{ __html: compareDoc.diff }} />
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
  );
};
