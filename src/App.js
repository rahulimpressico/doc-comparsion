import "./App.css";
import { Home } from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import ProtectedRoute from "./utils/ProtectedROute";
import { Tab2 } from "./pages/tab2";

const clint_ID =
  "577521091147-nq2q7uijm1a65oacifkrb1uivqlbigqf.apps.googleusercontent.com";
var SCOPES = "https://www.googleapis.com/auth/userinfo.email";
function App() {
  useEffect(() => {
    function start() {
      gapi.client
        .init({
          clientId: clint_ID, 
          scope: SCOPES,
        })
        .then(() => {
          // Do something after the client is initialized
        })
        .catch((error) => {
          console.error("Error initializing client:", error);
        });
    }

    gapi.load("client:auth2", start);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/preview"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/comparsion"
          element={
            <ProtectedRoute>
              <Tab2 />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
