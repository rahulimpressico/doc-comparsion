import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const storedData = window.localStorage.getItem("userData");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    };

    fetchUserData();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid" style={{ marginTop: "-1%" }}>
          <p
            className="text-start fs-5 fw-bolder  p-1"
            style={{ color: "#002D62" }}
          >
            Document text Comparsion
          </p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-lg-3">
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/preview");
                }}
                style={{ cursor: "pointer" }}
              >
                <a className="nav-link active" aria-current="page">
                  Preview
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/comparsion");
                }}
                style={{ cursor: "pointer" }}
              >
                <a className="nav-link">Comparsion</a>
              </li>
            </ul>
            <ul className="nav justify-content-end pt-1">
              {userData && (
                <>
                  <li>
                    <div
                      style={{
                        marginTop: "25%",
                      }}
                    >
                      <button
                        className="float-end btn btn-primary"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img
                        src={userData.picture}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{
                          width: "50%",
                          marginLeft: "55%",
                        }}
                      />
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3 float-end">
            {userData && (
              <>
                <div className="row">
                  <div className="col-md-8"></div>
                  <div className="col-md-4">
                    <div className="row">
                      <div>
                        <h6 className="float-end">{userData.name}</h6>

                        <p className="text-muted float-end fs-6">
                          {userData.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
