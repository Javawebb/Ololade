import { Routes, Route } from "react-router-dom";
import { Tasks } from "./Pages/Tasks";
import { Task } from "./components/Task";
import { Navbar } from "./components/Navbar";
import {Projects} from './Pages/Projects'
import { AboutMe } from "./Pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route index element={<Tasks />} />
          <Route path={'/projects'} element={<Projects/>}/>
          <Route path={'/aboutme'} element={<AboutMe/>}/>
        </Routes>
      <Task/>
    </div>
  );
}

export default App;
