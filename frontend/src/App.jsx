import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/ShopPage";
import Contactpage from "./pages/Contactpage/Contactpage";
import Authpage from "./pages/Authpage/Authpage";
import Cartpage from "./pages/Cartpage/Cartpage";
import Blogpage from "./pages/Blogpage/Blogpage";
import BlogDetailspage from "./pages/Blogdetailspage/Blogdetailspage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            {/* <Homepage /> */}
            {/* <Shoppage /> */}
            {/* <Contactpage /> */}
            {/* <Authpage /> */}
            {/* <Cartpage /> */}
            {/* <Blogpage /> */}
            <BlogDetailspage />
            <Footer />
        </>
    );
}

export default App;
