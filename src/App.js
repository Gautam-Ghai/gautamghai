import React from 'react';
import "./App.scss"
import Tabs from './components/tabs';
import Info from "./components/info"
import Footer from "./components/footer"
import Header from "./components/header"
import ScrollArrow from "./components/scrollArrow"
import WorkHistory from "./components/workHistory"
import About from "./components/about"

function App() {
  return (
    <div>
      <Header />
      <ScrollArrow />
      <Info />
      <About />
      <Tabs />
      <WorkHistory />
      <div><br /><br /></div>
      <Footer />
    </div>
  );
  
}

export default App;
