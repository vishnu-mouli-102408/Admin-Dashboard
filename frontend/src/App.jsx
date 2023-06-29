import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Intensity from "./scenes/intensity";
import Likelihood from "./scenes/likelihood";
import Relevance from "./scenes/relevance";
import Year from "./scenes/year";
import Country from "./scenes/country";
import Topic from "./scenes/topic";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/intensity" element={<Intensity />} />
              <Route path="/likelihood" element={<Likelihood />} />
              <Route path="/relevance" element={<Relevance />} />
              <Route path="/year" element={<Year />} />
              <Route path="/country" element={<Country />} />
              <Route path="/topics" element={<Topic />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
