import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/ShopPage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Homepage />
            <Shoppage />
            <Footer />
        </>
    );
}

export default App;
