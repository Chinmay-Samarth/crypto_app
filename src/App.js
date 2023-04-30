import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";

function App() {
    return (<>
        <Header />
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About />} />
        </Routes>
    </>
    );
}

export default App;
