import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/templates/SinglePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SinglePost from "./pages/templates/SinglePost";
import AddPost from "./pages/forms/AddPost";
import UpdatePost from "./pages/forms/UpdatePost";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { Paper } from "@mui/material";

function App() {
  const [darkMood, setDarkMood] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: green[600],
      },
      secondary: {
        main: "#328EDF",
      },
      mode: darkMood ? "dark" : "light",
    },
  });
  const handleChange = (event) => {
    setDarkMood(event.target.checked);
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Header
          onChange={handleChange}
          checked={darkMood}
          title="Learn React"
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/about"
            element={<SinglePage title="About" content="content of about" />}
          />
          <Route exact path="/posts/:id" element={<SinglePost />} />
          <Route exact path="/add-post" element={<AddPost />} />
          <Route exact path="update-post/:id" element={<UpdatePost/>}/>
        </Routes>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
