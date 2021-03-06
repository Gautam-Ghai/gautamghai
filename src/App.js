import React from 'react';
import "./App.scss"
import Tabs from './components/tabs';
import Info from "./components/info"
import Header from "./components/header"
import ScrollArrow from "./components/scrollArrow"
import WorkHistory from "./components/workHistory"
import About from "./components/about"
import Projects from "./components/projects"


function App() {
  return (
    <div>
      <Header />
      <ScrollArrow />
      <Info />
      <About />
      <Tabs />
      <WorkHistory />
      <Projects />
      <div><br /></div>
    </div>
  );
  
}

export default App;
