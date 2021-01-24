// import "./App.css";
import InstructorTag from "./components/InstructorTag";
import { ThemeProvider } from "styled-components";

const App = () => {

  const theme = {
    mainBgColor: "#282c34",
    fontColor: "#000"
  }
  return (
    <ThemeProvider theme={theme}>
      <h2>When in doubt, ask for help!</h2>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/DarthHamza`)}
      >
        <InstructorTag/>
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/Lailz`)}
      >
        {/* <InstructorTag/> */}
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/thehasanas`)}
      >
        {/* <InstructorTag/> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
