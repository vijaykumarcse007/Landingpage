
import './App.css';
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="App">
        <Navbar />
        <Main />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
