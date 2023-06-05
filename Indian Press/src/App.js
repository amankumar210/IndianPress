import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import News from "./components/News";
import MyAlert from "./components/MyAlert";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = () => {
  const pageSize = 8;
  const myApiKey = process.env.REACT_APP_NEWS_API;
  const countryName = "in";

  const [progress, setProgress] = useState(0);

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("Dark is set");
      document.body.style.backgroundColor = "#132435";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      console.log("Light is set");
      showAlert("Light Mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar mode={mode} toggleMode={toggleMode} />;
        <LoadingBar height={4} color="blue" progress={progress} />
        <MyAlert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element=<News
              apiKey={myApiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country={countryName}
              mode={mode}
              category="general"
              style={{ marg: "60px" }}
            />
          />
          <Route
            exact
            path="/business"
            element=<News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              apiKey={myApiKey}
              mode={mode}
              country={countryName}
              category="business"
            />
          />
          <Route
            exact
            path="/entertainment"
            element=<News
              key="entertainment"
              setProgress={setProgress}
              pageSize={pageSize}
              apiKey={myApiKey}
              mode={mode}
              country={countryName}
              category="entertainment"
            />
          />
          <Route
            exact
            path="/general"
            element=<News
              key="general"
              setProgress={setProgress}
              pageSize={pageSize}
              mode={mode}
              apiKey={myApiKey}
              country={countryName}
              category="general"
            />
          />
          <Route
            exact
            path="/health"
            element=<News
              key="health"
              setProgress={setProgress}
              pageSize={pageSize}
              apiKey={myApiKey}
              country={countryName}
              mode={mode}
              category="health"
            />
          />
          <Route
            exact
            path="/science"
            element=<News
              key="science"
              setProgress={setProgress}
              pageSize={pageSize}
              apiKey={myApiKey}
              mode={mode}
              country={countryName}
              category="science"
            />
          />
          <Route
            exact
            path="/sports"
            element=<News
              key="sports"
              setProgress={setProgress}
              pageSize={pageSize}
              apiKey={myApiKey}
              country={countryName}
              mode={mode}
              category="sports"
            />
          />
          <Route
            exact
            path="/technology"
            element=<News
              key="technology"
              setProgress={setProgress}
              pageSize={pageSize}
              mode={mode}
              apiKey={myApiKey}
              country={countryName}
              category="technology"
            />
          />
        </Routes>
        <Footer mode={mode} />
      </BrowserRouter>
    </>
  );
};

export default App;
