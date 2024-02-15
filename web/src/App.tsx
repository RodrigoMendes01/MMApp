import { Router } from "./Routes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './assets/global';
import defaultTheme from "./assets/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
  )
}

export default App
