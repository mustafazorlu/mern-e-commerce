import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Search from "../components/Modals/Search/Search";

const MainLayout = ({ children }) => {
    const [isSearchShow, setIsSearchShow] = useState(false);

    return (
        <>
            <Header setIsSearchShow={setIsSearchShow} />
            <Search
                isSearchShow={isSearchShow}
                setIsSearchShow={setIsSearchShow}
            />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
