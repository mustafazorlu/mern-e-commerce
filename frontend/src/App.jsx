import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Policy from "./components/Policy/Policy";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Campaigns from "./components/Campaigns/Campaigns";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Slider />
            <Categories />
            <Products />
            <Campaigns />
            <Policy />
            <Footer />
        </>
    );
}

export default App;
