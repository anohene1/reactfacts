import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/MainContent";
import {useState} from 'react';

function App() {

    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(prevState => !prevState);
    }

    return (
    <div className="container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
